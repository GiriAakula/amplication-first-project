import { SortOrder } from "../../util/SortOrder";

export type CityOrderByInput = {
  cityName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
