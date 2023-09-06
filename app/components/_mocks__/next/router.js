const useRouter = jest.fn();
useRouter.mockImplementation(() => ({
  push: jest.fn(),
  pathname: "/",
}));

export default useRouter;
