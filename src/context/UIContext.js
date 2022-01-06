import { createContext, useState } from "react";

export const UIContext = createContext();

export const UIProvider = ({children}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <UIContext.Provider
            value={{
                isMenuOpen,
                setIsMenuOpen
            }}
        >
            {children}
        </UIContext.Provider>
    )
}