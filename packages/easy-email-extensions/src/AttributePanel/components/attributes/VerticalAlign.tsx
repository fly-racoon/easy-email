import React, { useMemo } from 'react';
import { useFocusIdx, Stack } from 'easy-email-editor';
import { SelectField } from '../../../components/Form';

const options = [
  {
    value: 'top',
    label: 'сверху',
  },
  {
    value: 'middle',
    label: 'по центру',
  },
  {
    value: 'bottom',
    label: 'снизу',
  },
];

export function VerticalAlign({
  attributeName = 'vertical-align',
}: {
  attributeName?: string;
}) {
  const { focusIdx } = useFocusIdx();

  return useMemo(() => {
    return (
      <Stack>
        <SelectField
          style={{ width: 120 }}
          label='Вертикальное выравнивание'
          name={`${focusIdx}.attributes.${attributeName}`}
          options={options}
        />
      </Stack>
    );
  }, [attributeName, focusIdx]);
}
