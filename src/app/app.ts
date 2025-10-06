import { Component, signal } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import { SideBar } from "./components/side-bar/side-bar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected readonly title = signal('oficina_pardal');
}
