import {createContext} from "react";
import {UserContextValue} from "../UserContextProvider";

export const UserContext = createContext<UserContextValue | null>(null);
