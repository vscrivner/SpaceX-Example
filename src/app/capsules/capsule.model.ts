export interface ICapsule {
  capsule_serial: string;
  capsule_id: string;
  status: string;
  original_launch: Date | null;
  original_launch_unix: number | null;
  missions: ICapsuleMission[];
  landings: number;
  type: string;
  details: string | null;
  reuse_count: number;
}

export interface ICapsuleMission {
  name: string;
  flight: number;
}
