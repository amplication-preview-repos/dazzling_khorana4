/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { NftWhereUniqueInput } from "../../nft/base/NftWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class TransactionCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  buyer?: string | null;

  @ApiProperty({
    required: false,
    type: () => NftWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => NftWhereUniqueInput)
  @IsOptional()
  @Field(() => NftWhereUniqueInput, {
    nullable: true,
  })
  nft?: NftWhereUniqueInput | null;
}

export { TransactionCreateInput as TransactionCreateInput };
