export const getTitle = (route: string) => {
  const routeMap: Record<string, string> = {
    "/cash": "/donations/cash",
    "/check": "/donations/check",
    "/giftinkind": "/donations/giftinkind",
    "/trust": "/donations/trust",
    "/securities": "/donations/securities",
    "/wire": "/donations/wire",
  };

  // Check if the route is an alias, and if so, replace it with the full path
  route = routeMap[route.toLowerCase()] || route;

  const titleMap: Record<string, string> = {
    "/donations/cash": "Cash",
    "/donations/check": "Check",
    "/donations/giftinkind": "Gift In Kind",
    "/donations/trust": "Trust",
    "/donations/securities": "Securities",
    "/donations/wire": "Wire",
  };

  return titleMap[route.toLowerCase()] || "Gift";
};

/**
 * Determines whether instructions should be shown based on the provided route string.
 * The function checks if the route matches any of the specified paths where instructions are needed.
 *
 * @param route - The current route path as a string.
 *
 * @example
 * shouldShowInstructions("/donations/cash"); // Returns true
 *
 * @returns {boolean} `true` if instructions should be shown, `false` otherwise.
 */
export const shouldShowInstructions = (route: string) => {
  return [
    "/donations/cash",
    "/donations/check",
    "/donations/giftinkind",
  ].includes(route.toLowerCase());
};
