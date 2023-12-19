/* eslint-disable prettier/prettier */
// RootNavigation.js

import * as React from 'react';

export const navigationRef: any = React.createRef();
export const isReadyRef: any = React.createRef();
export function replace(name: any, params: any) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current?.replace(name, params);
  }
}

export function navigate(name: any, params: any) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current?.navigate(name, params);
  }
}

// add other navigation functions that you need and export them
