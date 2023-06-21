import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#7E22CE",
            contrastText: '#fff',
            dark: '#55059c',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    minWidth: '0px',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    border: 'none',
                }
            }
        }
    }
});