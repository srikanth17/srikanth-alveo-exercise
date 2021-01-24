import { Log, SetLogsAction, SET_LOGS } from '../types/types';

export const setLogs = (logs: Log): SetLogsAction => ({
  type: SET_LOGS,
  payload: logs,
});
