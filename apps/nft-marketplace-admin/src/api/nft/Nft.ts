import { JsonValue } from "type-fest";
import { Transaction } from "../transaction/Transaction";

export type Nft = {
  createdAt: Date;
  description: string | null;
  id: string;
  image: JsonValue;
  owner: string | null;
  title: string | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
