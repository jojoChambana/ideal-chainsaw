import { Box, Typography } from "@mui/material";

/**
 * Footer is a React functional component that renders a fixed footer at the bottom of the viewport.
 * The footer is styled with a fixed position, and it utilizes the primary color theme for the background
 * with a contrasting text color. It contains a Typography component with the text "This is the footer."
 *
 * @example
 * <Footer />
 *
 * @returns {JSX.Element} The rendered Box component containing the Typography with the footer text.
 */
const Footer = () => {
  return (
    <Box
      sx={{
        height: "48px", // Adjust according to your footer height
        position: "fixed",
        bottom: 0,
        width: "100%",
        zIndex: 1, // Ensure footer stays on top
        backgroundColor: (theme) => theme.palette.primary.main, // Match the primary color
        color: (theme) => theme.palette.primary.contrastText, // Text color to contrast with the background
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="body1">This is the footer</Typography>
    </Box>
  );
};

export default Footer;
