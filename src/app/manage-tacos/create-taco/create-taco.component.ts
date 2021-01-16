import { TacoService } from './../../services/taco-service';
import { ShellType } from './../interfaces/taco-interfaces';
import { Recipe } from './../../entities/recipe';
import { TacoStateService } from './../../services/taco-state-service';
import { TacoData } from './../../entities/taco-data';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-create-taco',
  templateUrl: './create-taco.component.html',
  styleUrls: ['./create-taco.component.css'],
})
export class CreateTacoComponent implements OnInit {
  form: FormGroup = this.fb.group({});

  tacoData$: Observable<TacoData> = of({ recipeName: '' });

  constructor(
    private fb: FormBuilder,
    private tacoStateService: TacoStateService,
    private tacoService: TacoService
  ) {}

  // tslint:disable-next-line: typedef
  onSaveRecipe() {
    console.log('hello');
    const draft1 = localStorage.getItem('STEP_1');
    const draft2 = localStorage.getItem('STEP_2');
    const draft3 = localStorage.getItem('STEP_3');

    console.log(`draft 21 ${draft1}`);
    console.log(`draft 2 ${draft2}`);
    console.log(`draft 3 ${draft3}`);

    let recipe: any = {};

    const recipeToSave: Recipe = {
      id: 0,
      recipeName: '',
      shellType: '',
      proteinType: '',
      toppingsType: '',
    };

    if (draft1) {
      recipe = JSON.parse(draft1);
      recipeToSave.recipeName = recipe.recipeName;
      recipeToSave.shellType = recipe.shellType;
    }
    if (draft2) {
      recipe = JSON.parse(draft2);
      recipeToSave.proteinType = recipe.proteinType;
    }
    if (draft3) {
      recipe = JSON.parse(draft3);
      recipeToSave.toppingsType = recipe.toppingsType;
    }

    if (recipeToSave && recipeToSave.recipeName.length > 0) {
      this.tacoService.createRecipe(recipeToSave);
      console.log(recipeToSave);
    } else {
      console.log('Invalid recipe cannot be saved.');
    }
  }

  createRecipe({
    recipeName = '',
    shellType = '',
    proteinType = '',
    toppingsType = '',
    id = 0,
  }): Recipe {
    return { recipeName, shellType, proteinType, toppingsType, id };
  }

  ngOnInit(): void {
    this.tacoData$ = this.tacoStateService.tacoData;
  }

  // tslint:disable-next-line: typedef
  get f() {
    return this.form.controls;
  }
}
