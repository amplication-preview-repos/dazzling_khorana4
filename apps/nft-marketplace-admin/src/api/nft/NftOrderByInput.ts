import { SortOrder } from "../../util/SortOrder";

export type NftOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  owner?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
