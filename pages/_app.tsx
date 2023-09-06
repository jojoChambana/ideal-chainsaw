import theme from "../app/theme";
import { ThemeProvider } from "@mui/material/styles";
import "../app/globals.scss";
import type { AppProps } from "next/app";
import Layout from "./layout"; // Assuming layout.tsx is in the pages directory
import { useEffect } from "react";
import { useRouter } from "next/router";

/**
 * MyApp Component
 *
 * This is the main application wrapper component for the Next.js app. It utilizes the Material-UI ThemeProvider to apply
 * the global theme defined in `theme`, and includes a Layout component that wraps the entire application.
 *
 * The global styles are imported from "app/globals.scss".
 *
 * @param props - The props for the MyApp component, following the AppProps interface from Next.js.
 * @param props.Component - The active page being rendered within the application.
 * @param props.pageProps - The props to be passed to the active page component.
 *
 * @example
 * <MyApp Component={SomePage} pageProps={somePageProps} />
 *
 * @returns The rendered application, with all components wrapped inside the ThemeProvider and Layout components.
 */

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      console.log(`New route: ${url}`);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
