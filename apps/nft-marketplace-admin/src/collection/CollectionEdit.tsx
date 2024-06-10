import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CollectionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="creator" source="creator" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
