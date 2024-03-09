import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { authPageActions } from '@tt-front/auth/store/actions';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './feature-login.component.html',
  styleUrl: './feature-login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureLoginComponent {
  private readonly store = inject(Store);
  loginForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  login(): void {
    if (this.loginForm.invalid) return;
    const email = this.loginForm.getRawValue().email;
    const password = this.loginForm.getRawValue().password;
    this.store.dispatch(authPageActions.login({ email, password }));
  }
}
