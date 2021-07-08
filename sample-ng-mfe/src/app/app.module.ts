import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserStore } from './services/user.store';
import { UserMainComponent } from './user-main/user-main.component';

@NgModule({
  declarations: [
    UserEntryComponent,
    UserViewComponent,
    UserDetailComponent,
    UserMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserStore]
})
export class AppModule { 
  constructor(private injector: Injector){}

  ngDoBootstrap(){
    const element = createCustomElement(UserEntryComponent, { injector: this.injector })
    customElements.define("user-wc", element);
  }
}
