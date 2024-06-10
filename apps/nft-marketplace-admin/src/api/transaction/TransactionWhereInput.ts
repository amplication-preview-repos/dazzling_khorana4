import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NftWhereUniqueInput } from "../nft/NftWhereUniqueInput";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  buyer?: StringNullableFilter;
  id?: StringFilter;
  nft?: NftWhereUniqueInput;
};
