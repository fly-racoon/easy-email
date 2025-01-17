import React, { useMemo } from 'react';
import { TextField } from '../../../components/Form';
import { useFocusIdx, Stack, TextStyle } from 'easy-email-editor';

export function Margin() {
  const { focusIdx } = useFocusIdx();

  return useMemo(() => {
    return (
      <Stack vertical spacing='extraTight'>
        <TextStyle size='large'>Margin</TextStyle>
        <Stack wrap={false}>
          <Stack.Item fill>
            <TextField
              label='Верхний'
              quickchange
              name={`${focusIdx}.attributes.marginTop`}
              inline
            />
          </Stack.Item>
          <Stack.Item fill>
            <TextField
              label='Нижний'
              quickchange
              name={`${focusIdx}.attributes.marginBottom`}
              inline
            />
          </Stack.Item>
        </Stack>

        <Stack wrap={false}>
          <Stack.Item fill>
            <TextField
              label='Левый'
              quickchange
              name={`${focusIdx}.attributes.marginLeft`}
              inline
            />
          </Stack.Item>
          <Stack.Item fill>
            <TextField
              label='Правый'
              quickchange
              name={`${focusIdx}.attributes.marginRight`}
              inline
            />
          </Stack.Item>
        </Stack>
      </Stack>
    );
  }, [focusIdx]);
}
