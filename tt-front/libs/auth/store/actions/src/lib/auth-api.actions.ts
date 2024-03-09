import { createActionGroup, props } from '@ngrx/store';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';

export const authApiActions = createActionGroup({
  source: 'Auth Api',
  events: {
    'User Login Success': props<{ status: HttpStatusCode }>(),
    'User Login Failure': props<{ errorMsg: HttpErrorResponse }>(),
    'User Registration Success': props<{ status: HttpStatusCode }>(),
    'User Registration Failure': props<{ errorMsg: HttpErrorResponse }>(),
  },
});
