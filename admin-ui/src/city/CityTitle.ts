import { City as TCity } from "../api/city/City";

export const CITY_TITLE_FIELD = "cityName";

export const CityTitle = (record: TCity): string => {
  return record.cityName || String(record.id);
};
