import { RouterModule, Routes } from '@angular/router';

import { CreateTacoComponent } from './create-taco/create-taco.component';
import { ManageTacoComponent } from './manage-taco.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ManageTacoComponent,
    children: [
      { path: '', redirectTo: '/manage-tacos/create-taco', pathMatch: 'full' },
      { path: 'home', component: CreateTacoComponent },
      { path: 'create-taco', component: CreateTacoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageTacoRoutingModule {}
