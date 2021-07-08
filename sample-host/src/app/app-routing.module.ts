import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadBundleGuard } from 'ngx-elements-router';
import { HostChildComponent } from './host-child/host-child.component';
import { HostMainComponent } from './host-main/host-main.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HostMainComponent,
  },
  {
    path: 'child',
    component: HostChildComponent,
  },
  {
    path: 'user',
    canActivate: [LoadBundleGuard],
    data: {
      bundleUrl: 'assets/user-wc.js',
    },
    loadChildren: () =>
      import('./mfe-host/mfe-host.module').then(
        (m) => m.MicroFrontendHostModule
      ),
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
