import React from "react";

export interface TodoFormProps {
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
    onSubmit(event: React.FormEvent<HTMLFormElement>): void;
    inputText: string;
}
