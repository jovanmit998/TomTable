import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { authPageActions } from '@tt-front/auth/store/actions';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './feature-login.component.html',
  styleUrl: './feature-login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureLoginComponent {
  loginForm = new FormGroup({
    emailUsername: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  login() {
    if (this.loginForm.invalid) return;
    const userNameEmail = this.loginForm.getRawValue().emailUsername;
    const password = this.loginForm.getRawValue().password;
    authPageActions.login({ username: userNameEmail, password });
  }
}
