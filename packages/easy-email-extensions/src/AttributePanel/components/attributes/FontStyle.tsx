import React, { useMemo } from 'react';
import { useFocusIdx } from 'easy-email-editor';
import { RadioGroupField } from '../../../components/Form';

const options = [
  {
    value: 'normal',
    label: 'Обычный',
  },
  {
    value: 'italic',
    label: 'Курсив',
  },
];

export function FontStyle({ name }: { name?: string; }) {
  const { focusIdx } = useFocusIdx();

  return (
    <RadioGroupField
      label='Стиль шрифта'
      name={name || `${focusIdx}.attributes.font-style`}
      options={options}
    />
  );
}
