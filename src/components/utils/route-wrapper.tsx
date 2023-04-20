import * as React from 'react';
import { Outlet } from 'react-router-dom';

/**
 * - use 'min' to specify minimum user role needed
 *   - e.g. 'min' being 'ADMIN' would give anyone with admin role access, but also to higher roles
 *      (if introduced in the future)
 *   - lowest role to highest: USER -> ADMIN
 *      (todo: in case of new roles, fit them here and make the component handle them)
 *
 * - use 'only' to restrict access to only 1 specific role
 */
export type GuardProps = {
  requiredUserRole?: {
    min?: 'USER' | 'ADMIN';
    only?: 'USER' | 'ADMIN';
  };
};

export type RouteWrapperProps = {
  guard?: React.FC | null;
  layout?: React.FC | null;
  guardProps?: GuardProps;
};

function RouteWrapper({ guard, layout, guardProps }: RouteWrapperProps) {
  const Guard = guard ?? React.Fragment;
  const Layout = layout ?? React.Fragment;

  return (
    <Guard {...(guard ? { guardProps } : null)}>
      <Layout>
        <Outlet />
      </Layout>
    </Guard>
  );
}

export { RouteWrapper };
