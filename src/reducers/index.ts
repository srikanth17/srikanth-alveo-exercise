import { combineReducers } from 'redux';
import logs from './logs';

const rootReducer = combineReducers({
  logs,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
