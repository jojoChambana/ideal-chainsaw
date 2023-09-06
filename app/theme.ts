import { createTheme } from "@mui/material/styles";

/**
 * Defines the custom theme for the application using MUI's createTheme function.
 * The theme includes specific color definitions, typography settings, and custom style overrides for various components.
 * 
 * @example
 * import theme from "@/theme";
 * import { ThemeProvider } from "@mui/material";
 * 
 * const App = () => (
 *   <ThemeProvider theme={theme}>
      //  Your components here
 *   </ThemeProvider>
 * );
 */
const theme = createTheme({
  palette: {
    primary: {
      main: "#131f33", // The primary color of the application
    },
  },
  components: {
    // Style overrides for the MuiLink component
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "inherit",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
    // Style overrides for the MuiCssBaseline component, which provides consistent base styling
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#ffffff",
        },
        "h2.sectionHeaders": {
          // Custom styles for h2 elements with the class "sectionHeaders"
          backgroundColor: "#cccccc",
          color: "#000000",
          padding: "5px 10px",
          fontSize: "1.5rem",
        },
        section: {
          padding: "0 0 2em 0",
        },
        "section p": {
          padding: "10px",
        },
        "section li p": {
          padding: "5px",
        },
        ".boldLinks": {
          textDecoration: "underline",
          listStyleType: "none",
        },
        ".boldLinks li": {
          padding: "5px 0",
          margin: "0",
          color: "cccccc",
        },
      },
    },
  },
});

export default theme;
