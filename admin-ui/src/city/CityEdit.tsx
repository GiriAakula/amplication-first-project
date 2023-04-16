import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="city_name" source="cityName" />
      </SimpleForm>
    </Edit>
  );
};
