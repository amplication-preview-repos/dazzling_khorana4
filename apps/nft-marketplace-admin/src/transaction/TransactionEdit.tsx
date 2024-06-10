import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { NftTitle } from "../nft/NftTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="buyer" source="buyer" />
        <ReferenceInput source="nft.id" reference="Nft" label="nft">
          <SelectInput optionText={NftTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
