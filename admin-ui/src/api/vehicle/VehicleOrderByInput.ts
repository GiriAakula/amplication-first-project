import { SortOrder } from "../../util/SortOrder";

export type VehicleOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  ownerId?: SortOrder;
  regDate?: SortOrder;
  regNumber?: SortOrder;
  updatedAt?: SortOrder;
  vehicleType?: SortOrder;
};
