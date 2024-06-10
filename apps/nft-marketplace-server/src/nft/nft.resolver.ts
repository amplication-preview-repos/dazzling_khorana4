import * as graphql from "@nestjs/graphql";
import { NftResolverBase } from "./base/nft.resolver.base";
import { Nft } from "./base/Nft";
import { NftService } from "./nft.service";

@graphql.Resolver(() => Nft)
export class NftResolver extends NftResolverBase {
  constructor(protected readonly service: NftService) {
    super(service);
  }
}
