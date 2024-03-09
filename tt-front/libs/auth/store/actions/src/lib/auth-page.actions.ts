import { createActionGroup, props } from '@ngrx/store';

export const authPageActions = createActionGroup({
  source: 'Auth Page',
  events: {
    Login: props<{ email: string; password: string }>(),
    Register: props<{ email: string; username: string; password: string }>(),
  },
});
