import React from 'react';
import { Height } from '@extensions/AttributePanel/components/attributes/Height';
import { ContainerBackgroundColor } from '@extensions/AttributePanel/components/attributes/ContainerBackgroundColor';
import { Padding } from '@extensions/AttributePanel/components/attributes/Padding';
import { AttributesPanelWrapper } from '@extensions/AttributePanel/components/attributes/AttributesPanelWrapper';
import { Collapse, Grid, Space } from '@arco-design/web-react';
import { Stack } from 'easy-email-editor';
import { ClassName } from '../../attributes/ClassName';
import { CollapseWrapper } from '../../attributes/CollapseWrapper';

export function Spacer() {
  return (
    <AttributesPanelWrapper>
      <CollapseWrapper defaultActiveKey={['-1', '0', '1', '2', '3']}>
        <Collapse.Item name='1' header='Размер'>
          <Space direction='vertical'>
            <Height />
            <Padding />
          </Space>
        </Collapse.Item>

        <Collapse.Item name='2' header='Фон'>
          <ContainerBackgroundColor title='Цвет фона' />
        </Collapse.Item>

        <Collapse.Item name='4' header='Дополнительно'>
          <Grid.Col span={24}>
            <ClassName />
          </Grid.Col>
        </Collapse.Item>
      </CollapseWrapper>
    </AttributesPanelWrapper>
  );
}
