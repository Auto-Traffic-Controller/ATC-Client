interface BlockIPType {
  ip: string;
  country_name: string;
  country_code: string;
  timestamp: string;
}

export interface getBlockIPType {
  list: BlockIPType[];
}
