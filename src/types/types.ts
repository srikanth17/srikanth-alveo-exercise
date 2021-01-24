export const SET_LOGS = 'SET_LOGS';

export interface Log {
  datetime: string;
  severity: string;
  message: string;
}

export interface SetLogsAction {
  type: typeof SET_LOGS;
  payload: Log;
}
