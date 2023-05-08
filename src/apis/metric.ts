import { getRequest } from "libs/api/axios/client";
import { useQuery } from "@tanstack/react-query";
import { metricKey } from "./queryKeys";
import { CPUMetricType, getNetworkMetricType } from "types/metric";
import { metricUrl } from "libs/api/apiUrlController";

export function useGetCPUUsage() {
  const query = useQuery<CPUMetricType>(
    metricKey.CPU,
    () => getRequest(metricUrl.getCPUUsage()),
    {
      refetchInterval: 1000,
    }
  );

  const { data } = query;

  return { cpuUsage: data?.cpu ?? 0 };
}

export function useGetNetworkPackets() {
  const query = useQuery<getNetworkMetricType>(
    metricKey.network,
    () => getRequest(metricUrl.getNetworkPackets()),
    {
      refetchInterval: 1000,
    }
  );

  const { data } = query;

  return { networkPackets: data?.network || [] };
}
