import React, { useContext, useMemo } from 'react';
import {
  ImageUploaderField,
  InputWithUnitField,
  SelectField,
  TextField,
} from '../../../components/Form';
import { Stack, useFocusIdx, useEditorProps } from 'easy-email-editor';
import { BackgroundColor } from './BackgroundColor';
import { Grid, Space } from '@arco-design/web-react';

const backgroundRepeatOptions = [
  {
    value: 'no-repeat',
    label: 'Не повторять',
  },
  {
    value: 'repeat',
    label: 'Повторять',
  },
  {
    value: 'repeat-x',
    label: 'Повторять по горизонтали',
  },
  {
    value: 'repeat-y',
    label: 'Повторять по вертикали',
  },
];

export function Background() {
  const { focusIdx } = useFocusIdx();
  const { onUploadImage } = useEditorProps();
  return useMemo(() => {
    return (
      <Space key={focusIdx} direction='vertical'>
        <ImageUploaderField
          label='Фоновое изображение'
          name={`${focusIdx}.attributes.background-url`}
          helpText='Расширение изображения должно быть .jpg, jpeg, png, gif и т.д. В противном случае изображение может отображаться некорректно.'
          uploadHandler={onUploadImage}
        />

        <Grid.Row>
          <Grid.Col span={11}>
            <BackgroundColor />
          </Grid.Col>
          <Grid.Col offset={1} span={11}>
            <SelectField
              label='Повторение фона'
              name={`${focusIdx}.attributes.background-repeat`}
              options={backgroundRepeatOptions}
            />
          </Grid.Col>
        </Grid.Row>
        <TextField
          label='Размер фона'
          name={`${focusIdx}.attributes.background-size`}
        />
      </Space>
    );
  }, [focusIdx, onUploadImage]);
}
