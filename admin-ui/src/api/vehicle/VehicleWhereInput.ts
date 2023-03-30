import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type VehicleWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  owner?: UserWhereUniqueInput;
  regDate?: DateTimeNullableFilter;
  regNumber?: StringNullableFilter;
  vehicleType?: StringNullableFilter;
};
