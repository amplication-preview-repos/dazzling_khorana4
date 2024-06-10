import { InputJsonValue } from "../../types";
import { TransactionCreateNestedManyWithoutNftsInput } from "./TransactionCreateNestedManyWithoutNftsInput";

export type NftCreateInput = {
  description?: string | null;
  image?: InputJsonValue;
  owner?: string | null;
  title?: string | null;
  transactions?: TransactionCreateNestedManyWithoutNftsInput;
};
