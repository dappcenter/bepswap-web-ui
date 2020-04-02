import { RemoteData } from '@devexperts/remote-data-ts';
import BigNumber from 'bignumber.js';
import { Maybe } from '../../types/bepswap';
import {
  AssetDetail,
  PoolDetail,
  StakersAssetData,
  ThorchainEndpoints,
  ThorchainEndpoint,
  InlineResponse200,
} from '../../types/generated/midgard';

export type AssetDetailMap = {
  [asset: string]: AssetDetail;
};

export type PoolDataMap = {
  [symbol: string]: PoolDetail;
};

export type GetStakerPoolDataPayload = {
  asset: string;
  address: string;
};

export type StakerPoolData = {
  [symbol: string]: StakersAssetData;
};

export type PriceDataIndex = {
  [symbol: string]: BigNumber;
};

export type GetTxByAddressPayload = {
  address: string;
  offset: number;
  limit: number;
  type: string;
};

export type GetTxByAddressTxIdPayload = {
  address: string;
  txId: string;
  offset: number;
  limit: number;
  type: string;
};

export type GetTxByAddressAssetPayload = {
  address: string;
  asset: string;
  offset: number;
  limit: number;
  type: string;
};

export type GetTxByAssetPayload = {
  asset: string;
  offset: number;
  limit: number;
  type: string;
};

export type TxDetailData = RemoteData<Error, InlineResponse200>;

export type State = {
  assets: AssetDetailMap;
  assetArray: AssetDetail[];
  pools: string[];
  poolAddressData: Maybe<ThorchainEndpoints>;
  bnbPoolAddress: Maybe<ThorchainEndpoint>;
  poolAddress: Maybe<string>;
  poolData: PoolDataMap;
  stakerPoolData: Maybe<StakerPoolData>;
  runePrice: number;
  basePriceAsset: string; // set base price asset as a RUNE
  priceIndex: PriceDataIndex;
  error: Maybe<Error>;
  poolLoading: boolean;
  stakerPoolDataLoading: boolean;
  txData: TxDetailData;
};
