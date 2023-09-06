import theme from "@/theme";
import { Typography, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { getTitle } from "./helpers";

/**
 * DynamicHeaderTitle is a React functional component that generates and displays a dynamic header title.
 * The title is constructed based on the current route path and is responsive to different screen sizes.
 * The component uses a helper function `getTitle` to obtain the specific title string associated with the route,
 * and appends "Transmittal Forms" or "Transmittal Form" as a suffix, depending on the route.
 *
 * @example
 * <DynamicHeaderTitle />
 *
 * @returns {JSX.Element} The rendered Typography component with the dynamically generated title string.
 */
const DynamicHeaderTitle: React.FC = () => {
  const router = useRouter();
  const route = router.pathname;
  const title = getTitle(route);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const suffix = route.toLowerCase() === "/" ? "Forms" : "Form";
  const typographyPadding = isMobile ? "30px" : undefined;

  // Construct the full title string
  const fullTitle = `${title} Transmittal ${suffix}`;

  return (
    <Typography
      component="h1" // Use h1 for accessibility
      variant="h6" // Apply variant based on screen size
      sx={{ paddingTop: typographyPadding }}
    >
      {fullTitle}
    </Typography>
  );
};

export default DynamicHeaderTitle;
