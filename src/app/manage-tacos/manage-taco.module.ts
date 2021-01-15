import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from './../app-material.module';
import { CommonModule } from '@angular/common';
import { CreateTacoComponent } from './create-taco/create-taco.component';
import { CreateTacoStep1Component } from './create-taco/create-taco-step1/create-taco-step1.component';
import { CreateTacoStep2Component } from './create-taco/create-taco-step2/create-taco-step2.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ListTacosComponent } from './list-tacos/list-tacos.component';
import { ManageTacoComponent } from './manage-taco.component';
import { ManageTacoRoutingModule } from './manage-taco-routing.module';
import { NgModule } from '@angular/core';
import { TacoService } from './../services/taco-service';

@NgModule({
  declarations: [
    ManageTacoComponent,
    CreateTacoComponent,
    ListTacosComponent,
    CreateTacoStep1Component,
    CreateTacoStep2Component,
  ],
  imports: [
    CommonModule,
    ManageTacoRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [TacoService],
})
export class ManageTacoModule {}
