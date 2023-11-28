import { Route } from '@angular/router';
import { AppRouteConfig } from './app-routes.config';

export const appRoutes: Route[] = [
  {
    path: AppRouteConfig.login,
    loadComponent: () =>
      import('@tt-front/auth/feature-login').then(
        (c) => c.FeatureLoginComponent
      ),
  },
  {
    path: AppRouteConfig.resetPassword,
    loadComponent: () =>
      import('@tt-front/auth/feature-forgot-password').then(
        (c) => c.FeatureForgotPasswordComponent
      ),
  },
  {
    path: AppRouteConfig.register,
    loadComponent: () =>
      import('@tt-front/auth/feature-register').then(
        (c) => c.FeatureRegisterComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('@tt-front/auth/feature-login').then(
        (c) => c.FeatureLoginComponent
      ),
    pathMatch: 'full',
  },
];
