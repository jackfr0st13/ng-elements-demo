import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ElementsRouterModule } from "ngx-elements-router";
import { MfeHostComponent } from "./mfe-host.component";

const routes: Routes = [
    {
      path: '**',
      component: MfeHostComponent,
    },
  ];
  
  @NgModule({
    declarations: [MfeHostComponent],
    imports: [RouterModule.forChild(routes), ElementsRouterModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  })
  export class MicroFrontendHostModule {}