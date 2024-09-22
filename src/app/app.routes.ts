import { Routes } from '@angular/router';
import { BiografiasComponent } from './biografias/biografias.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';


export const routes: Routes = [
    {path: 'Biografia', component:BiografiasComponent},
    {path: 'Experiencia_Laboral', component:ExperienciaLaboralComponent}
];
