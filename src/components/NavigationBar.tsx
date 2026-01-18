import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { EThemeMode, IThemeContext, ThemeContext } from "./ThemeProvider";
import { Switch } from "@mui/material";

const NavigationBar = () => {
    const theme = React.useContext<IThemeContext>(ThemeContext);
    const backgroundColor =
        theme.mode === EThemeMode.Dark
            ? "linear-gradient(to right, rgb(0, 0, 0), #28282b)"
            : "linear-gradient(to right, rgb(100, 100, 100), #28282b)";

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: backgroundColor }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                    <Switch
                        checked={theme.mode === EThemeMode.Light}
                        onClick={() => theme.toggleTheme()}
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export { NavigationBar };
