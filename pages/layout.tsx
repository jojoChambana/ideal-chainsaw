import React from "react";
import { CssBaseline, Box, Container, Typography } from "@mui/material";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";

/**
 * LayoutProps interface
 *
 * @param children - A React node that will be rendered as the main content within the layout.
 */
type LayoutProps = {
  children: React.ReactNode;
};

/**
 * Layout Component
 *
 * The Layout component is a higher-order component that wraps other components and provides a consistent
 * structure across the application. It includes a Header, Footer, and a main content area.
 *
 * The `children` prop is used to render the main content of the page, allowing flexibility for different
 * pages to provide their unique content while maintaining the same overall layout.
 *
 * CssBaseline is utilized to provide consistent baseline styling across browsers.
 *
 * @param {LayoutProps} props - The props object, containing the children to be rendered within the layout.
 * @param {React.ReactNode} props.children - The main content to be rendered within the layout.
 *
 * @example
 * <Layout>
 *   <MyComponent />
 * </Layout>
 *
 * @returns The rendered layout, including the Header, Footer, and the children components passed in as the main content.
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Box>
        <Header />
        <Container>
          <Box component="main" className="scrollable-container">
            <Box sx={{ paddingTop: "2em", paddingBottom: "2em" }}>
              <Typography variant="h4" component="h2">
                Instructions
              </Typography>
              {children}
            </Box>
          </Box>
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
