import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NftService } from "./nft.service";
import { NftControllerBase } from "./base/nft.controller.base";

@swagger.ApiTags("nfts")
@common.Controller("nfts")
export class NftController extends NftControllerBase {
  constructor(protected readonly service: NftService) {
    super(service);
  }
}
