import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Navigation from "./Navigation";
import { getTitle } from "./helpers";

/**
 * Header is a React functional component that renders the application's header.
 * It includes an AppBar from MUI, displaying the logo, navigation links, and page title.
 * On mobile screens, the navigation links are hidden in a Drawer that can be toggled open and closed.
 *
 * @example
 * <Header />
 *
 * @returns {JSX.Element} The rendered AppBar component containing the header elements, including the logo, navigation, and page title.
 */
const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();
  const route = router.pathname;
  const title = getTitle(route);
  const suffix = route.toLowerCase() === "/" ? "Forms" : "Form";

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const fullTitle = `${title} Transmittal ${suffix}`;

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <AppBar color="primary">
      <Toolbar>
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMobileMenuToggle}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Box
          display="flex"
          alignItems="center"
          sx={{ width: "100%", justifyContent: "space-between" }}
        >
          <div onClick={handleLogoClick} style={{ cursor: "pointer" }}>
            {/* Use div and onClick handler */}
            <Image
              src="/logo.svg"
              alt="UIF Logo"
              width={200}
              height={75}
              priority
              style={{ position: "relative", top: "0.2em" }}
            />
          </div>
          {!isMobile && (
            <Box>
              <Navigation />
            </Box>
          )}
          {!isMobile && (
            <Box sx={{ minWidth: "275px" }}>
              <Typography
                component="h1" // Use h1 for accessibility
                variant="h6" // Apply variant based on screen size
              >
                {fullTitle}
              </Typography>
            </Box>
          )}
        </Box>
      </Toolbar>
      <Drawer
        anchor="left"
        variant="temporary"
        open={mobileMenuOpen}
        onClose={handleMobileMenuToggle}
      >
        <IconButton onClick={handleMobileMenuToggle}>
          <MenuIcon />
        </IconButton>
        <Navigation />
      </Drawer>
    </AppBar>
  );
};

export default Header;
