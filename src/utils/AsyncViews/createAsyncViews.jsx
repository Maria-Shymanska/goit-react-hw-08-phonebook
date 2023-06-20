import { lazy } from 'react';

export const createAsyncView = componentName => {
  return lazy(() => {
    return import(`../../views/${componentName}`);
  });
};
