import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'tt-layout-shell-visitor',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './shell-visitor.component.html',
  styleUrl: './shell-visitor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellVisitorComponent {}
