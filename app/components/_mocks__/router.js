import { useRouter as originalUseRouter } from 'next/router';

export const useRouter = {
  ...originalUseRouter,
  push: jest.fn(),
  pathname: '/',
};

export default useRouter;
