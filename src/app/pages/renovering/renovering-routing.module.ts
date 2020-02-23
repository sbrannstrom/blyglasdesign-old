import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenoveringPage } from './renovering.page';

const routes: Routes = [
  {
    path: '',
    component: RenoveringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenoveringPageRoutingModule {}
