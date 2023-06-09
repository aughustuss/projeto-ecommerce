import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#19456B",
            contrastText: '#fff',
            dark: '#0f3f69',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    minWidth: '0',
                    borderRadius: '6px',
                }
            }
        }
    }
});