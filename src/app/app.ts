import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkActive } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('wetterApp');
}
