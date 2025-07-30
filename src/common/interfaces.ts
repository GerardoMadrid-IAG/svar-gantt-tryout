export interface Task {
  id: number;
  start: Date | string;
  duration: number;
  text: string;
  progress: number;
  parent?: number;
  open?: boolean;
  type?: string;
}

export interface Link {
  id: number;
  source: number;
  target: number;
  type: string;
}
export interface Scale {
  unit: string;
  step: number;
  format: string;
}
