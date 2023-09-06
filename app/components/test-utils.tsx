import React from "react";
import { render as rtlRender } from "@testing-library/react";

import { NextRouter } from "next/router";
import { withFormProvider } from "./formControls/withFormProvider";

const mockRouter: NextRouter = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  isFallback: false,
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isReady: true,
  isLocaleDomain: false,
  isPreview: false,
};

// Mock the useRouter hook
jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

// Set up the useRouter mock implementation
const useRouterMock = jest.spyOn(require("next/router"), "useRouter");
useRouterMock.mockReturnValue(mockRouter);

const customRender = (ui: React.ReactElement, options?: any) => {
  const DummyComponent: React.FC<{
    type: string;
    children?: React.ReactNode;
  }> = ({ children }) => <>{children}</>;

  const WrappedComponent = withFormProvider(DummyComponent);

  return rtlRender(
    <WrappedComponent type="someType">{ui}</WrappedComponent>,
    options
  );
};

export * from "@testing-library/react";
export { customRender as render };
