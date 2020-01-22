import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas


//servicios

import {APP_ROUTING} from './app.routes';


//componentes
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ModeloComponent } from './components/modelo/modelo.component';
import { OfertaComponent } from './components/oferta/oferta.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    NosotrosComponent,
    ModeloComponent,
    OfertaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
