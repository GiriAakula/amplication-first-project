import { SortOrder } from "../../util/SortOrder";

export type PlaceOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  placeDescription?: SortOrder;
  placeName?: SortOrder;
  updatedAt?: SortOrder;
};
