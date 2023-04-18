import * as React from 'react';
import { Navigate } from 'react-router-dom';

// import { useAuth } from '../../hooks/useAuth';
import type { GuardProps } from '@/components/utils/route-wrapper';

type AuthGuardProps = {
  children?: React.ReactNode;
  guardProps?: GuardProps;
};

function AuthGuard({ children, guardProps }: AuthGuardProps) {
  // const { authUser, isAdmin } = useAuth();
  const authUser = null;
  const isAdmin = false;

  if (!authUser) {
    return <Navigate to="/auth/sign-in" />;
  }

  let disallowedForCurrentUser = false;
  if (guardProps?.requiredUserRole?.min === 'ADMIN' && !isAdmin) {
    disallowedForCurrentUser = true;
  }
  if (guardProps?.requiredUserRole?.only === 'USER' && isAdmin) {
    disallowedForCurrentUser = true;
  }
  if (guardProps?.requiredUserRole?.only === 'ADMIN' && !isAdmin) {
    disallowedForCurrentUser = true;
  }

  if (disallowedForCurrentUser) {
    return <Navigate to="/" />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export { AuthGuard };
