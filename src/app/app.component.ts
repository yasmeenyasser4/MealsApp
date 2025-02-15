import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SidemenueComponent } from "./sidemenue/sidemenue.component";

import { FooterComponent } from "./footer/footer.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidemenueComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meals';
}
