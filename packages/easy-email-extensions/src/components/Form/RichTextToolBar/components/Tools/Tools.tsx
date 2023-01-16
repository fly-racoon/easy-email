import React, { useCallback } from 'react';
import { ToolItem } from '../ToolItem';
import { Link, LinkParams } from '../Link';
import {
  FIXED_CONTAINER_ID,
  getShadowRoot,
  IconFont,
  useEditorProps,
  useFocusBlockLayout,
} from 'easy-email-editor';
import { FontFamily } from '../FontFamily';
import { MergeTags } from '../MergeTags';
import { useSelectionRange } from '@extensions/AttributePanel/hooks/useSelectionRange';
import { IconBgColor } from './IconBgColor';
import { IconFontColor } from './IconFontColor';
import { MergeTagBadge } from 'easy-email-editor';
import { BasicTools } from '../BasicTools';
import { Unlink } from '../Unlink';
import { StrikeThrough } from '../StrikeThrough';
import { Underline } from '../Underline';
import { Italic } from '../Italic';
import { Bold } from '../Bold';
import { FontSize } from '../FontSize';
import { RICH_TEXT_TOOL_BAR } from '@extensions/constants';

export interface ToolsProps {
  onChange: (content: string) => any;
}

export function Tools(props: ToolsProps) {
  const { mergeTags, enabledMergeTagsBadge } = useEditorProps();
  const { focusBlockNode } = useFocusBlockLayout();
  const { selectionRange, restoreRange, setRangeByElement } = useSelectionRange();

  const execCommand = useCallback(
    (cmd: string, val?: any) => {
      if (!selectionRange) {
        console.error('No selectionRange');
        return;
      }
      if (!focusBlockNode?.contains(selectionRange?.commonAncestorContainer)) {
        console.error('Not commonAncestorContainer');
        return;
      }

      restoreRange(selectionRange);
      const uuid = (+new Date()).toString();
      if (cmd === 'createLink') {
        const linkData = val as LinkParams;
        const target = linkData.blank ? '_blank' : '';
        let link: HTMLAnchorElement;
        if (linkData.linkNode) {
          link = linkData.linkNode;
        } else {
          document.execCommand(cmd, false, uuid);

          link = getShadowRoot().querySelector(`a[href="${uuid}"`)!;
        }

        if (target) {
          link.setAttribute('target', target);
        }
        link.style.color = 'inherit';
        link.style.textDecoration = linkData.underline ? 'underline' : 'none';
        link.setAttribute('href', linkData.link.trim());
      } else if (cmd === 'insertHTML') {
        let newContent = val;
        if (enabledMergeTagsBadge) {
          newContent = MergeTagBadge.transform(val, uuid);
        }

        document.execCommand(cmd, false, newContent);
        const insertMergeTagEle = getShadowRoot().getElementById(uuid);
        if (insertMergeTagEle) {
          insertMergeTagEle.focus();
          setRangeByElement(insertMergeTagEle);
        }
      } else {
        document.execCommand(cmd, false, val);
      }

      const contenteditableElement = getShadowRoot().activeElement;
      if (contenteditableElement?.getAttribute('contenteditable') === 'true') {
        const html = getShadowRoot().activeElement?.innerHTML || '';
        props.onChange(html);
      }
    },
    [
      enabledMergeTagsBadge,
      focusBlockNode,
      props,
      restoreRange,
      selectionRange,
      setRangeByElement,
    ],
  );

  const execCommandWithRange = useCallback(
    (cmd: string, val?: any) => {
      document.execCommand(cmd, false, val);
      const contenteditableElement = getShadowRoot().activeElement;
      if (contenteditableElement?.getAttribute('contenteditable') === 'true') {
        const html = getShadowRoot().activeElement?.innerHTML || '';
        props.onChange(html);
      }
    },
    [props.onChange],
  );

  const getPopoverMountNode = () => document.getElementById(FIXED_CONTAINER_ID)!;

  return (
    <div
      id={RICH_TEXT_TOOL_BAR}
      style={{ display: 'flex', flexWrap: 'nowrap' }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <BasicTools />

        {mergeTags && (
          <MergeTags
            execCommand={execCommand}
            getPopupContainer={getPopoverMountNode}
          />
        )}
        <div className='easy-email-extensions-divider' />
        <div className='easy-email-extensions-divider' />
        <FontFamily
          execCommand={execCommand}
          getPopupContainer={getPopoverMountNode}
        />
        <div className='easy-email-extensions-divider' />
        <FontSize
          execCommand={execCommand}
          getPopupContainer={getPopoverMountNode}
        />
        <div className='easy-email-extensions-divider' />
        <Bold
          currentRange={selectionRange}
          onChange={() => execCommandWithRange('bold')}
        />
        <div className='easy-email-extensions-divider' />
        <Italic
          currentRange={selectionRange}
          onChange={() => execCommandWithRange('italic')}
        />
        <div className='easy-email-extensions-divider' />
        <StrikeThrough
          currentRange={selectionRange}
          onChange={() => execCommandWithRange('strikeThrough')}
        />
        <div className='easy-email-extensions-divider' />
        <Underline
          currentRange={selectionRange}
          onChange={() => execCommandWithRange('underline')}
        />
        <div className='easy-email-extensions-divider' />
        <IconFontColor
          selectionRange={selectionRange}
          execCommand={execCommand}
          getPopoverMountNode={getPopoverMountNode}
        />
        <div className='easy-email-extensions-divider' />
        <IconBgColor
          selectionRange={selectionRange}
          execCommand={execCommand}
          getPopoverMountNode={getPopoverMountNode}
        />

        <div className='easy-email-extensions-divider' />
        <Link
          currentRange={selectionRange}
          onChange={values => execCommand('createLink', values)}
          getPopupContainer={getPopoverMountNode}
        />
        <div className='easy-email-extensions-divider' />
        <Unlink
          currentRange={selectionRange}
          onChange={() => execCommand('')}
        />
        <div className='easy-email-extensions-divider' />

        <ToolItem
          onClick={() => execCommand('justifyLeft')}
          icon={<IconFont iconName='icon-align-left' />}
          title='Выравнивание слева'
        />
        <ToolItem
          onClick={() => execCommand('justifyCenter')}
          icon={<IconFont iconName='icon-align-center' />}
          title='Выравнивание по центру'
        />
        <ToolItem
          onClick={() => execCommand('justifyRight')}
          icon={<IconFont iconName='icon-align-right' />}
          title='Выравнивание справа'
        />
        <div className='easy-email-extensions-divider' />
        <ToolItem
          onClick={() => execCommand('insertOrderedList')}
          icon={<IconFont iconName='icon-list-ol' />}
          title='Нумерованный список'
        />
        <ToolItem
          onClick={() => execCommand('insertUnorderedList')}
          icon={<IconFont iconName='icon-list-ul' />}
          title='Маркированный список'
        />
        <div className='easy-email-extensions-divider' />

        <ToolItem
          onClick={() => execCommand('insertHorizontalRule')}
          icon={<IconFont iconName='icon-line' />}
          title='Линия'
        />
        <div className='easy-email-extensions-divider' />
        <ToolItem
          onClick={() => execCommand('removeFormat')}
          icon={<IconFont iconName='icon-close' />}
          title='Удалить форматирование'
        />
        <div className='easy-email-extensions-divider' />
      </div>
    </div>
  );
}
