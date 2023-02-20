import * as React from "react";
import { localStorageKeys } from "../constants";

export enum EThemeMode {
    Light = 1,
    Dark = 2,
}

export interface IThemeContext {
    mode: EThemeMode;
    toggleTheme: () => void;
}

// Default value
const defaultThemeContextState: IThemeContext = {
    mode: EThemeMode.Light,
    toggleTheme: () => void 0,
};

// ThemeContext
export const ThemeContext = React.createContext<IThemeContext>(defaultThemeContextState);

// Theme component
const ThemeProvider: React.FunctionComponent = props => {
    const [currentThemeInUse, setCurrentThemeInUSe] = React.useState<EThemeMode>(
        (Number(
            localStorage.getItem(localStorageKeys.userTheme) ?? EThemeMode.Light
        ) as EThemeMode) || EThemeMode.Light
    );

    function toggleTheme() {
        setCurrentThemeInUSe(
            currentThemeInUse === EThemeMode.Light ? EThemeMode.Dark : EThemeMode.Light
        );
    }

    React.useEffect(() => {
        localStorage.setItem(localStorageKeys.userTheme, currentThemeInUse.toString());
    }, [currentThemeInUse]);

    React.useEffect(() => {}, []);

    // Provider
    return (
        <ThemeContext.Provider value={{ mode: currentThemeInUse, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
