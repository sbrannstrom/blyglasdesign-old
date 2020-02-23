import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuktorisationPage } from './auktorisation.page';

const routes: Routes = [
  {
    path: '',
    component: AuktorisationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuktorisationPageRoutingModule {}
