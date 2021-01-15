import { AppMaterialModule } from './../app-material.module';
import { CommonModule } from '@angular/common';
import { CreateTacoComponent } from './create-taco/create-taco.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ManageTacoComponent } from './manage-taco.component';
import { ManageTacoRoutingModule } from './manage-taco-routing.module';
import { NgModule } from '@angular/core';
import { ListTacosComponent } from './list-tacos/list-tacos.component';

@NgModule({
  declarations: [ManageTacoComponent, CreateTacoComponent, ListTacosComponent],
  imports: [
    CommonModule,
    ManageTacoRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
  ],
})
export class ManageTacoModule {}
