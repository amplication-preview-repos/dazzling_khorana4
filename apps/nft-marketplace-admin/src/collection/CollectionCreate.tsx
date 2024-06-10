import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CollectionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="creator" source="creator" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
