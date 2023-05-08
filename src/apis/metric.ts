import { axiosClient } from "libs/api/axios/client";
import { useQuery } from "@tanstack/react-query";
import { metricKey } from "./queryKeys";
import { CPUMetricType, getNetworkMetricType } from "types/metric";
import { metricUrl } from "libs/api/apiUrlController";

async function getUsage(url: string) {
  try {
    const { data } = await axiosClient.get(url);
    return data;
  } catch (e) {
    return e;
  }
}

export function useGetCPUUsage() {
  const query = useQuery<CPUMetricType>(
    metricKey.CPU,
    () => getUsage(metricUrl.getCPUUsage()),
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
    () => getUsage(metricUrl.getNetworkPackets()),
    {
      refetchInterval: 1000,
    }
  );

  const { data } = query;

  return { networkPackets: data?.network || [] };
}
