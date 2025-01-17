//import { boolean, number, string } from "yargs";

export interface BribeDataType {
  enabled: boolean;
  voteindex: number;
  poolname: string;
  poolurl: string;
  rewarddescription: string;
  assumption: string;
  fixedreward: TokenData[];
  percentreward: TokenData[];
  percentagethreshold: number;
  rewardcap: number;
}

export interface Bribes {
  version: string;
  description: string;
  round: number;
  bribedata: BribeDataType[];
}

export interface TokenData {
  token: string;
  amount: number;
  isfixed: boolean;
}

export interface TokenPrice {
  token: string;
  price: number;
}
