import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-register.component.html',
  styleUrl: './feature-register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureRegisterComponent {}
