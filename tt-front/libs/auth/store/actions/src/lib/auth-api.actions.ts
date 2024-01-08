import { createActionGroup, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const authApiActions = createActionGroup({
  source: 'Auth Api',
  events: {
    'User Login Success': props<{ status: number }>(),
    'User Login Failure': props<{ errorMsg: HttpErrorResponse }>(),
  },
});
