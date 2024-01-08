import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthResource } from '@tt-front/auth/data-access';
import { authApiActions, authPageActions } from '@tt-front/auth/store/actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

export const loginUser = createEffect(
  (actions$ = inject(Actions), authResource = inject(AuthResource)) => {
    return actions$.pipe(
      ofType(authPageActions.login),
      exhaustMap(() =>
        authResource.loginUser().pipe(
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
