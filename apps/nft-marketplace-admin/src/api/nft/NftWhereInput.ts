import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type NftWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  owner?: StringNullableFilter;
  title?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
};
