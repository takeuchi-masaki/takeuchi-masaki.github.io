import { PaletteMode, useMediaQuery, createTheme, ThemeProvider } from "@mui/material";
import React from "react";

export var getBackgroundColor = (mode: PaletteMode) => ({
    backgroundColor: mode === 'light' ? '#fcf3f2' : '#1b1b1b',
});

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#d13429',
        },
        secondary: {
            main: '#f6d3d0',
        },
    },
});
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#d13429',
        },
        secondary: {
            main: '#f6d3d0',
        },
    },
});

export default function Theme(props: any) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [mode, setMode] = React.useState<PaletteMode>(prefersDarkMode ? 'dark' : 'light');
    const [theme, setTheme] = React.useState(mode === 'light' ? lightTheme : darkTheme);
    const colorMode = React.useMemo(
        () => ({
        // The dark mode switch would invoke this method
        toggleColorMode: () => {
            setMode((prevMode: PaletteMode) =>
            prevMode === 'light' ? 'dark' : 'light',
            );
        },
        }),
        [],
    );

    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}