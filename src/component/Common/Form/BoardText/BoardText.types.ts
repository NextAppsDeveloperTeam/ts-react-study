import { FormControlProps } from '../FormControl';

export type BoardTextValue = string;

export interface BoardTextProps<T extends BoardTextValue> extends Omit<FormControlProps<T>, 'children'> {}

export const BoardTextDefaultProps = {};
