import { LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoComponent, NoopLocationStrategy } from 'ngx-elements-router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { UserMainComponent } from './user-main/user-main.component';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [{
  path: 'user',
  component: UserEntryComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      component: UserMainComponent,
    },
    {
      path: 'list',
      pathMatch: 'full',
      component: UserViewComponent,
    },
    {
      path: 'detail/:id',
      component: UserDetailComponent,
    }
  ],
},
{ path: '**', component: NoComponent },];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
    }),
  ],
  providers: [{ provide: LocationStrategy, useClass: NoopLocationStrategy }],
  exports: [RouterModule],
})
export class AppRoutingModule { }
