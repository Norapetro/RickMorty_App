import { Routes } from '@angular/router';
import { RickService } from './rick.service';
import { HolaComponent } from './hola/hola.component';
import { ObservadorComponent } from './observador/observador.component';

export const routes: Routes = [
    {
        path: 'hola',
        component: HolaComponent
    },
    {
        path: '',
        component: ObservadorComponent
    }

];
