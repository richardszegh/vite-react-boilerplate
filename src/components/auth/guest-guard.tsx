import * as React from 'react';
import { Navigate } from 'react-router-dom';

// import { useAuth } from '../../hooks/useAuth';

type GuestGuardProps = {
  children?: React.ReactNode;
};

function GuestGuard({ children }: GuestGuardProps) {
  // const { authUser } = useAuth();
  const authUser = null;

  if (authUser) {
    return <Navigate to="/" />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export { GuestGuard };
