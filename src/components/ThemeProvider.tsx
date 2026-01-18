import * as React from "react";
import { localStorageKeys } from "./constants";

export enum EThemeMode {
    Light = 1,
    Dark = 2,
}

export type IThemeContext = {
    mode: EThemeMode;
    toggleTheme: () => void;
};

const defaultThemeContextState: IThemeContext = {
    mode: EThemeMode.Light,
    toggleTheme: () => void 0,
};

export const ThemeContext = React.createContext<IThemeContext>(defaultThemeContextState);

type Props = {
    children: React.ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
    const [currentThemeInUse, setCurrentThemeInUSe] = React.useState<EThemeMode>(
        Number(localStorage.getItem(localStorageKeys.userTheme) ?? EThemeMode.Light) ||
            EThemeMode.Light
    );

    function toggleTheme() {
        setCurrentThemeInUSe(
            currentThemeInUse === EThemeMode.Light ? EThemeMode.Dark : EThemeMode.Light
        );
    }

    React.useEffect(() => {
        localStorage.setItem(localStorageKeys.userTheme, currentThemeInUse.toString());
    }, [currentThemeInUse]);

    return (
        <ThemeContext.Provider value={{ mode: currentThemeInUse, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider };
