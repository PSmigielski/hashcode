import React,{ createContext, useState } from "react";

export const UIContext = createContext();

// eslint-disable-next-line react/prop-types
export const UIProvider = ({children}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <UIContext.Provider
            value={{
                isMenuOpen,
                setIsMenuOpen,
                isLoading,
                setIsLoading
            }}
        >
            {children}
        </UIContext.Provider>
    )
}