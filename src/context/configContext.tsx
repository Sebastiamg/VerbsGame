import { createContext, useReducer } from 'react';
import {
  initialState,
  useConfigReducer,
  type actions,
} from '../reducer/configReducer';
import type { configType } from '../types/confi.type';

export const ConfigStateContext = createContext<configType | undefined>(
  undefined,
)!;
export const ConfigDispatchContext = createContext<
  React.Dispatch<actions> | undefined
>(undefined)!;

export function ConfigContextProvider({ children }: React.PropsWithChildren) {
  const [state, dispatch] = useReducer(useConfigReducer, initialState);

  return (
    <ConfigStateContext value={state}>
      <ConfigDispatchContext value={dispatch}>{children}</ConfigDispatchContext>
    </ConfigStateContext>
  );
}
