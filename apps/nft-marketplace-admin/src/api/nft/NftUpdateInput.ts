import { InputJsonValue } from "../../types";
import { TransactionUpdateManyWithoutNftsInput } from "./TransactionUpdateManyWithoutNftsInput";

export type NftUpdateInput = {
  description?: string | null;
  image?: InputJsonValue;
  owner?: string | null;
  title?: string | null;
  transactions?: TransactionUpdateManyWithoutNftsInput;
};
