import { FormControlProps } from '../FormControl';

export type BoardTextAreaValue = string;

export interface BoardTextAreaProps<T extends BoardTextAreaValue> extends Omit<FormControlProps<T>, 'children'> {}

export const BoardTextAreaDefaultProps = {};
