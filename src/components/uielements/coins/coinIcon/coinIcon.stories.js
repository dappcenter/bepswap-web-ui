import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import AppHolder from '../../../../AppStyle';
import { defaultTheme } from '../../../../settings';

import CoinIcon from './coinIcon';

storiesOf('Components/Coins/CoinIcon', module).add('default', () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppHolder>
        <div style={{ display: 'flex' }}>
          <CoinIcon type="bnb" size="small" />
          <CoinIcon type="bolt" size="small" />
          <CoinIcon type="rune" size="small" />
          <CoinIcon type="ankr" size="small" />
          <CoinIcon type="ftm" size="small" />
          <CoinIcon type="tomo" size="small" />
          <CoinIcon type="loki" size="small" />
        </div>
        <div style={{ display: 'flex' }}>
          <CoinIcon type="bnb" size="big" />
          <CoinIcon type="bolt" size="big" />
          <CoinIcon type="rune" size="big" />
          <CoinIcon type="ankr" size="big" />
          <CoinIcon type="ftm" size="big" />
          <CoinIcon type="tomo" size="big" />
          <CoinIcon type="blue" size="big" />
          <CoinIcon type="confirm" size="big" />
          <CoinIcon type="loki" size="big" />
        </div>
      </AppHolder>
    </ThemeProvider>
  );
});
