declare global {
  function empty<T>(v: T): v is Exclude<T, NonNullable<T>>;
  function notEmpty<T>(v: T): v is NonNullable<T>;
  function equal(v1: any, v2: any): boolean;
  function contains<T extends string | number>(list: ReadonlyArray<T>, value: string | number): boolean;
  function ifNull<TV, TNV>(v: TV | null, v2: TNV): TV | TNV;
  function ifUndefined<TV, TNV>(v: TV | undefined, v2: TNV): TV | TNV;
  function ifNullOrUndefined<TV, TNV>(v: TV | null | undefined, v2: TNV): TV | TNV;
}

globalThis.empty = <T>(v: T): v is Exclude<T, NonNullable<T>> => {
  let result = false;
  if (v == null) {
    result = true;
  } else if (typeof v === 'string') {
    result = v === '';
  } else if (typeof v === 'object') {
    if (Array.isArray(v)) {
      result = v.length === 0;
    } else if (!(v instanceof Date)) {
      result = Object.entries(v).length === 0;
    }
  }
  return result;
};

globalThis.notEmpty = <T>(v: T): v is NonNullable<T> => {
  return !empty(v);
};

globalThis.equal = (v1: any, v2: any): boolean => {
  if (v1 === v2) return true;
  if (typeof v1 !== typeof v2) return false;
  if (v1 == null || v2 == null) return false;
  if (Array.isArray(v1) && Array.isArray(v2)) {
    if (v1.length !== v2.length) return false;
    for (let i = 0; i < v1.length; i += 1) {
      if (v1[i] !== v2[i]) return false;
    }
  } else {
    return v1 === v2;
  }
  return true;
};

globalThis.contains = (list, value) => {
  return !!list.find((item) => item === value);
};

globalThis.ifNull = (v, v2) => {
  return v === null ? v2 : v;
};

globalThis.ifUndefined = (v, v2) => {
  return v === undefined ? v2 : v;
};

globalThis.ifNullOrUndefined = (v, v2) => {
  return v === null || v === undefined ? v2 : v;
};

export {};
