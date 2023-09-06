import { Box, useMediaQuery, useTheme, styled } from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";

/**
 * Styled component for an individual navigation link. Supports an "active" state.
 */
const NavigationLink = styled("div")<{ active?: boolean }>(
  ({ theme, active }) => ({
    paddingLeft: "10px",
    paddingRight: "10px",
    "&:hover": {
      "& span": {
        color: "#ccc",
      },
    },
    ...(active && {
      "& span": {
        color: "#ccc",
      },
    }),
  })
);

/**
 * Styled component for the container of navigation links. Adapts to the screen size.
 */
const NavigationLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

/**
 * Navigation is a React functional component that renders the primary navigation links for the application.
 * It provides visual feedback for the currently active link and adapts to different screen sizes.
 */
const Navigation = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  /**
   * Determines if the given href corresponds to the current active route.
   * @param href - The href value to be checked against the current route.
   * @returns True if the href matches the current active route; false otherwise.
   */
  const isActive = (href: string) => {
    const rewrittenPath = `/donations${
      href.charAt(0).toUpperCase() + href.slice(1)
    }`;
    return router.pathname.toLowerCase() === rewrittenPath;
  };

  return (
    <NavigationLinks>
      {[
        { href: "/cash", text: "Cash" },
        { href: "/check", text: "Check" },
        { href: "/giftinkind", text: "Gift In Kind" },
        { href: "/securities", text: "Securities" },
        { href: "/wire", text: "Wire" },
      ].map((link, index) => (
        <NextLink key={index} href={link.href} passHref>
          <NavigationLink active={isActive(link.href)}>
            <span>{link.text}</span>
          </NavigationLink>
        </NextLink>
      ))}
    </NavigationLinks>
  );
};

export default Navigation;
