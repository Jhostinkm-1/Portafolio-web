import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BiografiasComponent } from './biografias/biografias.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,BiografiasComponent,ExperienciaLaboralComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portafolio';
}
