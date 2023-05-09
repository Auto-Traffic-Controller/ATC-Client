import { useQuery } from "@tanstack/react-query";
import { blockKey } from "./queryKeys";
import { getRequest } from "libs/api/axios/client";
import { blockUrl } from "libs/api/apiUrlController";
import { getBlockIPType } from "types/block";

export function useGetBlockIP() {
  const query = useQuery<getBlockIPType>(blockKey.blockIP, () =>
    getRequest(blockUrl.getBlockIP())
  );

  const { data } = query;

  return { blockIP: data?.list ?? [] };
}
