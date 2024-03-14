// ThemeContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { darkTheme, lightTheme } from '../Thems/Thems.jsx'
const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
    const [currentTheme, setCurrentTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark' ? darkTheme : lightTheme;
    });

    useEffect(() => {
        localStorage.setItem('theme', currentTheme === darkTheme ? 'dark' : 'light');
    }, [currentTheme]);

    const toggleTheme = () => {
        setCurrentTheme((prevTheme) =>
            prevTheme === lightTheme ? darkTheme : lightTheme
        );
    };

    return (
        <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
