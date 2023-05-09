import { useQuery } from "@tanstack/react-query";
import { attackKey } from "./queryKeys";
import { getRequest } from "libs/api/axios/client";
import { attackUrl } from "libs/api/apiUrlController";
import { getAttackLogType } from "types/attack";

export function useGetAttackLog() {
  const query = useQuery<getAttackLogType>(attackKey.attackLog, () =>
    getRequest(attackUrl.getAttackLog())
  );

  const { data } = query;

  return { attackLog: data?.list ?? [] };
}
