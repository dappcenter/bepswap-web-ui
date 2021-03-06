/* eslint-disable no-alert */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import AppHolder from '../../../AppStyle';
import { defaultTheme } from '../../../settings';

import Drag from './drag';

storiesOf('Components/Drag', module).add('default', () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppHolder>
        <div style={{ padding: '20px' }}>
          <Drag
            source="bnb"
            target="rune"
            title="Drag to swap"
            onConfirm={() => alert('confirmed!')}
          />

          <Drag
            source="blue"
            target="confirm"
            title="Drag to confirm"
            onConfirm={() => alert('confirmed!')}
          />
        </div>
      </AppHolder>
    </ThemeProvider>
  );
});
