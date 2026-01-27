import { useContext } from 'react';
import {
  ConfigDispatchContext,
  ConfigStateContext,
} from '../context/configContext';

export function useConfigStateContext() {
  const configContext = useContext(ConfigStateContext);

  if (!configContext) {
    throw new Error('Use configContext inside a Context Provider');
  }

  return configContext;
}

export function useConfigDispatchContext() {
  const configDispatchContext = useContext(ConfigDispatchContext);

  if (!configDispatchContext) {
    throw new Error('Use configContext inside a Context Provider');
  }

  return configDispatchContext;
}
