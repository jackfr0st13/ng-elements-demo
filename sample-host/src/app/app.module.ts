import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HostChildComponent } from './host-child/host-child.component';
import { HostMainComponent } from './host-main/host-main.component';
import { MfeHostComponent } from './mfe-host/mfe-host.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HostChildComponent,
    HostMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
