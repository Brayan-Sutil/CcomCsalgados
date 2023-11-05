import { createContext, useContext } from "react";
import { WishListContextProps } from "./ContextTypes";

const Context = createContext<WishListContextProps | undefined>(undefined);
export const UseContextInProvider = () => {
    const context = useContext(Context)
    if(!context){
        throw new Error("Use o UseContextInProvider apenas no corpo de um Provider");
    }
    return context
}
export default Context