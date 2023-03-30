import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const VehicleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <ReferenceInput source="owner.id" reference="User" label="Owner">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <DateTimeInput label="Reg Date" source="regDate" />
        <TextInput label="Reg Number" source="regNumber" />
        <TextInput label="Vehicle Type" source="vehicleType" />
      </SimpleForm>
    </Create>
  );
};
