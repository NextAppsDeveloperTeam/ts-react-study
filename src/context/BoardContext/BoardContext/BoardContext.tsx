import {createContext} from "react";
import {BoardContextValue} from "../BoardContextProvider";

export const BoardContext = createContext<BoardContextValue | null>(null);
