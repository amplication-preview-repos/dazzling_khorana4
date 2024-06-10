import { SortOrder } from "../../util/SortOrder";

export type CollectionOrderByInput = {
  createdAt?: SortOrder;
  creator?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
