import {
  ReactNode as _ReactNode,
  ReactElement as _ReactElement,
  useId as _useId,
  useRef as _useRef,
  useState as _useState,
  useEffect as _useEffect,
  useLayoutEffect as _useLayoutEffect,
  useCallback as _useCallback,
  useMemo as _useMemo,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';

const _withStaticProps = <Props, T>(
  forwarded: ForwardRefExoticComponent<Props & RefAttributes<unknown>>,
  staticProps: T
) => Object.assign(forwarded, staticProps);

declare global {
  type ReactNode = _ReactNode;
  type ReactElement = _ReactElement;

  // eslint-disable-next-line no-var
  var withStaticProps: typeof _withStaticProps;

  // eslint-disable-next-line no-var
  var useId: typeof _useId;
  // eslint-disable-next-line no-var
  var useRef: typeof _useRef;
  // eslint-disable-next-line no-var
  var useState: typeof _useState;
  // eslint-disable-next-line no-var
  var useLayoutEffect: typeof _useLayoutEffect;
  // eslint-disable-next-line no-var
  var useEffect: typeof _useEffect;
  // eslint-disable-next-line no-var
  var useCallback: typeof _useCallback;
  // eslint-disable-next-line no-var
  var useMemo: typeof _useMemo;
}

globalThis.withStaticProps = _withStaticProps;

globalThis.useId = _useId;
globalThis.useRef = _useRef;
globalThis.useState = _useState;
globalThis.useLayoutEffect = _useLayoutEffect;
globalThis.useEffect = _useEffect;
globalThis.useCallback = _useCallback;
globalThis.useMemo = _useMemo;

export {};
