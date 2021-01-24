import { SET_LOGS, SetLogsAction, Log } from '../types/types';

const logsReducerDefaultState = [] as Log[];

export default function logs(
  state = logsReducerDefaultState,
  action: SetLogsAction
) {
  switch (action.type) {
    case SET_LOGS:
      return [...state, action.payload];
    default:
      return state;
  }
}
