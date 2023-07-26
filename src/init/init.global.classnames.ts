import _classNames from 'classnames';

declare global {
  // eslint-disable-next-line no-var
  var classNames: typeof _classNames;
}

globalThis.classNames = _classNames;
