import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-login.component.html',
  styleUrl: './feature-login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureLoginComponent {}
