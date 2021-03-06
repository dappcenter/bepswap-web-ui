import styled from 'styled-components';
import { Maybe } from '../../../../types/bepswap';

export type CoinDataWrapperSize = 'small' | 'big';
export type CoinDataWrapperType = 'wallet' | 'normal';

type CoinDataWrapperProps = {
  size: CoinDataWrapperSize;
  type: CoinDataWrapperType
  target?: Maybe<string>
};

export const CoinDataWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 8px;

  .label-wrapper {
    padding: 0;
    text-transform: uppercase;
  }

  .coinData-coin-avatar {
    margin-right: ${(props: CoinDataWrapperProps) => (props.target ? '0px' : '12px')};
  }

  .coinData-asset-info {
    margin-left: ${(props: CoinDataWrapperProps) => (props.target ? '0px' : '4px')} !important;
  }

  .coinData-asset-info,
  .coinData-target-info {
    display: flex;
    flex-direction: ${(props: CoinDataWrapperProps) => (props.type === 'normal' ? 'column' : 'row')};
    margin: 0 4px;
  }

  .asset-price-info {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;

    ${(props: CoinDataWrapperProps) => props.size === 'big' && 'height: 32px;'}
    .label-wrapper {
      ${(props: CoinDataWrapperProps) =>
        props.size === 'big' &&
        `display: flex;
          align-items: flex-end;`}
    }
  }

  .coinData-asset-label,
  .coinData-asset-value,
  .coinData-target-label,
  .coinData-target-value {
    color: #626d7c;
  }

  .coinData-asset-label {
    margin-right: ${(props: CoinDataWrapperProps) => (props.type !== 'normal' ? '4px' : 0)};
  }
`;
