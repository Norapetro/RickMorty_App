import { Routes } from '@angular/router';
import { ObservadorComponent } from './observador/observador.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    {
        path: '',
        component: ObservadorComponent
    },
    {
        path: 'navbar',
        component: NavbarComponent
    }

];
