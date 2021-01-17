import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Recipe } from './../../entities/recipe';
import { ShellType } from './../interfaces/taco-interfaces';
import { TacoData } from './../../entities/taco-data';
import { TacoService } from './../../services/taco-service';
import { TacoStateService } from './../../services/taco-state-service';

@Component({
  selector: 'app-create-taco',
  templateUrl: './create-taco.component.html',
  styleUrls: ['./create-taco.component.css'],
})
export class CreateTacoComponent implements OnInit {
  form: FormGroup = this.fb.group({});

  tacoData$: Observable<TacoData> = of({ recipeName: '' });

  constructor(
    private router: Router,
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
      toppings: [],
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
      recipeToSave.toppings = recipe.toppings;
    }

    if (recipeToSave && recipeToSave.recipeName.length > 0) {
      this.tacoService.createRecipe(recipeToSave).subscribe(() => {});
      console.log(recipeToSave);
      this.router.navigateByUrl(`manage-tacos/list-recipes`);
    } else {
      console.log('Invalid recipe cannot be saved.');
    }
  }

  ngOnInit(): void {
    localStorage.clear();
    this.tacoData$ = this.tacoStateService.tacoData;
  }

  // tslint:disable-next-line: typedef
  get f() {
    return this.form.controls;
  }
}
