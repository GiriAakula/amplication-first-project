import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PlaceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="place_description"
          multiline
          source="placeDescription"
        />
        <TextInput label="place_name" source="placeName" />
      </SimpleForm>
    </Create>
  );
};
