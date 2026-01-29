import verbsDatabase from '../../DB/verbsListDB.json';
import type { configType, VerbForm } from '../types/confi.type';

export type actions =
  | { type: 'SET_SELECT'; payload: { value: boolean } }
  | { type: 'SET_TYPE'; payload: { value: boolean } }
  | { type: 'SET_ONLY_REGULARS'; payload: { value: boolean } }
  | { type: 'SET_ONLY_IRREGULARS'; payload: { value: boolean } }
  | { type: 'BLUR_VERB'; payload: { value: boolean } };

export const initialState: configType = {
  verbs: verbsDatabase as VerbForm[],
  config: {
    select: false,
    type: false,
  },
  onlyIrregulars: false,
  onlyRegulars: false,
  blurVerbs: false,
};

export const useConfigReducer = (state: configType, actions: actions) => {
  switch (actions.type) {
    case 'SET_SELECT':
      state.config.select = actions.payload.value;
      return {
        ...state,
      };

    case 'SET_ONLY_REGULARS': {
      const checked = actions.payload.value;
      return {
        ...state,
        onlyRegulars: checked,
        onlyIrregulars: checked ? false : state.onlyIrregulars,
      };
    }

    case 'SET_ONLY_IRREGULARS': {
      const checked = actions.payload.value;
      return {
        ...state,
        onlyIrregulars: checked,
        onlyRegulars: checked ? false : state.onlyRegulars,
      };
    }

    case 'BLUR_VERB':
      return {
        ...state,
        blurVerbs: actions.payload.value,
      };

    default:
      return state;
  }
};
