import React, { useMemo } from 'react';
import { useFocusIdx } from 'easy-email-editor';
import { SelectField } from '../../../components/Form';

export const borderStyleOptions = [
  {
    value: 'dashed',
    label: 'Пунктир с отрезками',
  },
  {
    value: 'dotted',
    label: 'Пунктир с точками',
  },
  {
    value: 'solid',
    label: 'Непрерывнй',
  },
  {
    value: 'double',
    label: 'Двойной',
  },
  {
    value: 'ridge',
    label: 'Кромка',
  },
  {
    value: 'groove',
    label: 'Выемка',
  },
  {
    value: 'inset',
    label: 'Вкладка',
  },
  {
    value: 'outset',
    label: 'Боковик',
  },
];

export function BorderStyle() {
  const { focusIdx } = useFocusIdx();

  return useMemo(() => {
    return (
      <SelectField
        label='Стиль'
        name={`${focusIdx}.attributes.border-style`}
        options={borderStyleOptions}
      />
    );
  }, [focusIdx]);
}
