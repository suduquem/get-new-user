import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Se importa el módulo para el servicio
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [AppComponent, UserComponent],
  // en los imports se le dice que se va a trabajar con ese módulo del servicio
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
