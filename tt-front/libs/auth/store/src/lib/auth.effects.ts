import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthResource } from '@tt-front/auth/data-access';
import { authApiActions, authPageActions } from '@tt-front/auth/store/actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

export const loginUser = createEffect(
  (actions$ = inject(Actions), authResource = inject(AuthResource)) => {
    return actions$.pipe(
      ofType(authPageActions.login),
      exhaustMap(({ email, password }) =>
        authResource.loginUser(email, password).pipe(
          map((status) => authApiActions.userLoginSuccess({ status })),
          catchError((error) =>
            of(authApiActions.userLoginFailure({ errorMsg: error }))
          )
        )
      )
    );
  },
  { functional: true }
);

export const registerUser = createEffect(
  (actions$ = inject(Actions), authResource = inject(AuthResource)) => {
    return actions$.pipe(
      ofType(authPageActions.register),
      exhaustMap(({ email, username, password }) =>
        authResource.registerUser(email, username, password).pipe(
          map((status) => authApiActions.userRegistrationSuccess({ status })),
          catchError((error) =>
            of(authApiActions.userRegistrationFailure({ errorMsg: error }))
          )
        )
      )
    );
  },
  { functional: true }
);
