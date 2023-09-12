import {FieldValues} from "react-hook-form";
import {UserStatus} from "../../../@types";

export interface IFormData extends FieldValues {
    id: number;
    name: string;
    email: string;
    phone: string;
    password: string;
    chkPwd: string;
    status: UserStatus;
}