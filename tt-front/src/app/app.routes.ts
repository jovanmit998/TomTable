import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => authCheck(false),
  },
];

const authCheck = (isAuth: boolean) => {
  return isAuth ? authenticatedRoutes : visitorRoutes;
};

const authenticatedRoutes = import('@tt-front/layout/shell-user').then(
  (c) => c.shellUserRoutes
);
const visitorRoutes = import('@tt-front/layout/shell-visitor').then(
  (c) => c.shellVisitorRoutes
);
