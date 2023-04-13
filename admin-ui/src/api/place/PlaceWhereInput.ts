import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PlaceWhereInput = {
  id?: StringFilter;
  placeDescription?: StringNullableFilter;
  placeName?: StringNullableFilter;
};
