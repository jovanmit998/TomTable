import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tt-layout-shell-visitor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shell-visitor.component.html',
  styleUrl: './shell-visitor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellVisitorComponent {}
