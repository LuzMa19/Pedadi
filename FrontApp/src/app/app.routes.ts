import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ModeloComponent } from './components/modelo/modelo.component';
import { OfertaComponent } from './components/oferta/oferta.component';

const APP_ROUTES: Routes = [
    { path: 'Inicio', component: HomeComponent },
    { path: 'Nosotros', component: NosotrosComponent },
    { path: 'Modelo', component: ModeloComponent },
    { path: 'Oferta', component: OfertaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'Inicio'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);