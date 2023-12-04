import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tt-layout-shell-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shell-user.component.html',
  styleUrl: './shell-user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellUserComponent {}
