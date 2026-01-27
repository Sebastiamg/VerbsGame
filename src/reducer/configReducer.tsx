import verbsDatabase from '../../DB/verbsListDB.json';
import type { configType, VerbForm } from '../types/confi.type';

export type actions =
  | { type: 'SET_SELECT'; payload: { value: boolean } }
  | { type: 'SET_TYPE'; payload: { value: boolean } };

export const initialState: configType = {
  verbs: verbsDatabase as VerbForm[],
  config: {
    select: false,
    type: false,
  },
};

export const useConfigReducer = (state: configType, actions: actions) => {
  switch (actions.type) {
    case 'SET_SELECT':
      state.config.select = actions.payload.value;
      return {
        ...state,
      };

    default:
      return state;
  }
};
