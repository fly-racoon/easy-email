import React, { useMemo } from 'react';
import { useFocusIdx } from 'easy-email-editor';
import { SelectField } from '../../../components/Form';

const options = [
  {
    value: '',
    label: 'Нет',
  },
  {
    value: 'underline',
    label: 'Подчеркнутый',
  },
  {
    value: 'overline',
    label: 'Подчеркнутый над текстом',
  },
  {
    value: 'line-through',
    label: 'Перечеркнутый',
  },
  {
    value: 'blink',
    label: 'Мерцающий',
  },
  {
    value: 'inherit',
    label: 'Унаследованный',
  },
];

export function TextDecoration({ name }: { name?: string; }) {
  const { focusIdx } = useFocusIdx();

  return useMemo(() => {
    return (
      <SelectField
        label='Оформление текста'
        name={name || `${focusIdx}.attributes.text-decoration`}
        options={options}
      />
    );
  }, [focusIdx, name]);
}
