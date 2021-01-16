import { RouterModule, Routes } from '@angular/router';

import { CreateTacoComponent } from './create-taco/create-taco.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
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
      { path: 'recipe/:id', component: EditRecipeComponent },
      { path: 'list-recipes', component: ListRecipesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageTacoRoutingModule {}
