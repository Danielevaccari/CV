import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { EThemeMode, IThemeContext, ThemeContext } from "../theme/ThemeProvider";
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
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ marginRight: 2 }}>
                        {" "}
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Menu
                    </Typography>
                    <Switch
                        checked={theme.mode === EThemeMode.Light}
                        onClick={() => theme.toggleTheme()}
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavigationBar;
