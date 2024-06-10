import { Nft as TNft } from "../api/nft/Nft";

export const NFT_TITLE_FIELD = "title";

export const NftTitle = (record: TNft): string => {
  return record.title?.toString() || String(record.id);
};
