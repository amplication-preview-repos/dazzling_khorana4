import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { NftTitle } from "../nft/NftTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="buyer" source="buyer" />
        <ReferenceInput source="nft.id" reference="Nft" label="nft">
          <SelectInput optionText={NftTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
