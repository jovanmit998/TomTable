import { Route } from '@angular/router';
import { AppRouteConfig } from './../../../../../src/app/app-routes.config';
import * as loginEffects from '@tt-front/auth/store';
import { provideEffects } from '@ngrx/effects';

export const shellVisitorRoutes: Route[] = [
  {
    path: '',
    providers: [provideEffects([loginEffects])],
    children: [
      {
        path: `${AppRouteConfig.login}`,
        loadComponent: () =>
          import('@tt-front/auth/feature-login').then(
            (c) => c.FeatureLoginComponent
          ),
      },

      {
        path: `${AppRouteConfig.register}`,
        loadComponent: () =>
          import('@tt-front/auth/feature-register').then(
            (c) => c.FeatureRegisterComponent
          ),
      },

      {
        path: `${AppRouteConfig.resetPassword}`,
        loadComponent: () =>
          import('@tt-front/auth/feature-forgot-password').then(
            (c) => c.FeatureForgotPasswordComponent
          ),
      },

      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('@tt-front/auth/feature-login').then(
            (c) => c.FeatureLoginComponent
          ),
      },
      {
        path: '**',
        redirectTo: `${AppRouteConfig.login}`,
      },
    ],
  },
];
