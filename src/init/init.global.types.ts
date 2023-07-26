declare global {
  type PartialPick<T, K extends keyof T> = Partial<Pick<T, K>>;
  type PartialOmit<T, K extends keyof T> = Partial<Omit<T, K>>;
  type RequiredPick<T, K extends keyof T> = Required<Pick<T, K>>;
  type RequiredOmit<T, K extends keyof T> = Required<Omit<T, K>>;
  type Dict<T = any> = { [k: string]: T };
  type ValueOf<T> = T[keyof T];
}

export {};
