import { Component } from '@angular/core';
import { FilterationComponent } from "../filteration/filteration.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [FilterationComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
