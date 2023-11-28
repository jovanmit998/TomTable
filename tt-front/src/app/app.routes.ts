import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@tt/auth/feature-login').then((c) => c.FeatureLoginComponent),
    pathMatch: 'full',
  },
];
