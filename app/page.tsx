'use client'
import { Typography, Box, PaletteMode, ThemeProvider, useMediaQuery } from "@mui/material";
import React from "react";
import Theme from "./theme";

export default function Home() {
    return (
        <Theme>
            <Typography variant="h1">Masaki's Profile Website</Typography>
            <div></div>
            <Typography variant="h2">work in progress~</Typography>
        </Theme>
    );
}
