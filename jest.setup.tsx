import "@testing-library/jest-dom";
import { act as rtlAct } from "@testing-library/react";
import { NextRouter } from "next/router";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

const mockRouter: NextRouter = {
  basePath: "",
  pathname: "/",
  route: "/",
  query: {},
  asPath: "/",
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isReady: true,
  isLocaleDomain: false,
  isPreview: false,
  isFallback: false,
  forward: jest.fn(),
};

// Mock 'next/router'
jest.mock("next/router", () => ({
  ...jest.requireActual("next/router"),
  useRouter: () => mockRouter,
}));

const mockMethods = {
  watch: jest.fn(),
  handleSubmit: jest.fn(),
  register: jest.fn(),
  getValues: jest.fn(),
  getFieldState: jest.fn(),
  setError: jest.fn(),
  unregister: jest.fn(),
  setValue: jest.fn(),
  clearErrors: jest.fn(),
  trigger: jest.fn(),
  reset: jest.fn(),
};

// Mock 'react-hook-form'
jest.mock("react-hook-form", () => ({
  useForm: () => mockMethods,
  useFormContext: () => mockMethods,
  FormProvider: ({ children }: { children: React.ReactNode }) => children,
}));

// Declare 'act' globally
declare global {
  const act: typeof rtlAct;
}
