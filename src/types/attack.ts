interface AttackLogType {
  ip: string;
  attack_type: string;
  timestamp: string;
}

export interface getAttackLogType {
  list: AttackLogType[];
}
