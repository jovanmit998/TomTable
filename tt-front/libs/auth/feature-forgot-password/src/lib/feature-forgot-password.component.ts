import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-forgot-password.component.html',
  styleUrl: './feature-forgot-password.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureForgotPasswordComponent {}
