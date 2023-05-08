export interface CPUMetricType {
  cpu: number;
}

interface NetworkMetricType {
  timestamp: string;
  packet: number;
}

export interface getAllNetworkMetricType {
  network: NetworkMetricType[];
}
