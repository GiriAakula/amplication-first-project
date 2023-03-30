import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VehicleCreateInput = {
  name?: string | null;
  owner?: UserWhereUniqueInput | null;
  regDate?: Date | null;
  regNumber?: string | null;
  vehicleType?: string | null;
};
