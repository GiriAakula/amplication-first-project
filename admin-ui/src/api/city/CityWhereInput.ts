import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CityWhereInput = {
  cityName?: StringNullableFilter;
  id?: StringFilter;
};
