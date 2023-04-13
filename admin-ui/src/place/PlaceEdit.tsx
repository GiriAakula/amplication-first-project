import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PlaceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="place_description"
          multiline
          source="placeDescription"
        />
        <TextInput label="place_name" source="placeName" />
      </SimpleForm>
    </Edit>
  );
};
