import { createActionGroup, props } from '@ngrx/store';

export const authPageActions = createActionGroup({
  source: 'Login Page',
  events: {
    Login: props<{ username: string; password: string }>(),
  },
});
