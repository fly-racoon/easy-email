import React, { useMemo } from 'react';
import { Stack, useFocusIdx } from 'easy-email-editor';
import { RadioGroupField } from '../../../components/Form';

const options = [
  {
    value: 'left',
    label: 'слева',
  },
  {
    value: 'center',
    label: 'по центру',
  },
  {
    value: 'right',
    label: 'справа',
  },
];

export function Align({ inline }: { inline?: boolean; }) {
  const { focusIdx } = useFocusIdx();

  return (
    <RadioGroupField
      label='Выравнивание'
      name={`${focusIdx}.attributes.align`}
      options={options}
    />
  );
}
