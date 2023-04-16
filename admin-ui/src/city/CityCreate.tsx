import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="city_name" source="cityName" />
      </SimpleForm>
    </Create>
  );
};
