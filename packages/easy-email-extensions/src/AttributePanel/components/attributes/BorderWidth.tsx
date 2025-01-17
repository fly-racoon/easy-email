import React, { useMemo } from 'react';
import { useFocusIdx } from 'easy-email-editor';
import { TextField } from '../../../components/Form';

export function BorderWidth() {
  const { focusIdx } = useFocusIdx();

  return useMemo(() => {
    return (
      <TextField
        label='Ширина'
        quickchange
        name={`${focusIdx}.attributes.border-width`}
      />
    );
  }, [focusIdx]);
}
