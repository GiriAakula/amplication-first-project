import { Place as TPlace } from "../api/place/Place";

export const PLACE_TITLE_FIELD = "placeName";

export const PlaceTitle = (record: TPlace): string => {
  return record.placeName || String(record.id);
};
