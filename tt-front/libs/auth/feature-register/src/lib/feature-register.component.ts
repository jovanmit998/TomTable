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
  templateUrl: './feature-register.component.html',
  styleUrl: './feature-register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureRegisterComponent {
  private readonly store = inject(Store);
  registerForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    username: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });
  register(): void {
    if (this.registerForm.invalid) return;
    const email = this.registerForm.getRawValue().email;
    const username = this.registerForm.getRawValue().email;
    const password = this.registerForm.getRawValue().password;

    this.store.dispatch(
      authPageActions.register({ email, username, password })
    );
    console.log('Reg request sent')
  }
}
