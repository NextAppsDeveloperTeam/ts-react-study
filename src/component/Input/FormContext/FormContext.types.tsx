import {FieldPath, FieldValues, UseControllerProps} from "react-hook-form";

export interface InputProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends UseControllerProps<TFieldValues, TName> {
    label?: string;
    type?: string;
    placeholder?: string;
    helperText?: string;
}