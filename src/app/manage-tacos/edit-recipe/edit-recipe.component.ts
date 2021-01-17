import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import {
  ProteinType,
  ShellType,
  ToppingType,
} from './../interfaces/taco-interfaces';

import { ActivatedRoute } from '@angular/router';
import { MatCheckbox } from '@angular/material/checkbox';
import { Recipe } from 'src/app/entities/recipe';
import { TacoData } from './../../entities/taco-data';
import { TacoService } from './../../services/taco-service';
import { TacoStateService } from './../../services/taco-state-service';
import { filter } from 'rxjs/operators';

const recipeToSave: Recipe = {
  id: 0,
  recipeName: '',
  shellType: '',
  proteinType: '',
  toppingsType: '',
  toppings: [],
};
@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css'],
})
export class EditRecipeComponent implements OnInit {
  recipeInEdit!: Recipe;

  tacoData$: Observable<TacoData> = of({ recipeName: '' });

  form: FormGroup = this.fb.group({
    recipeName: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(60)],
    ],
    shellType: ['SOFTSHELL', Validators.required],
    toppings: new FormArray([]),
    proteinType: ['MEAT', Validators.required],
    id: '',
  });

  recipeFound$!: Observable<Recipe>;
  subscription!: Subscription;
  shellTypes$!: Observable<ShellType[]>;
  proteinTypes$!: Observable<ProteinType[]> | undefined;
  toppingsTypes$!: Observable<ToppingType[]> | undefined;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private tacoService: TacoService,
    private tacoStateService: TacoStateService
  ) {}

  ngOnInit(): void {
    this.tacoData$ = this.tacoStateService.tacoData;
    this.shellTypes$ = this.tacoService.findTacoShellTypes();
    this.proteinTypes$ = this.tacoService.findTacoProteinTypes();
    this.toppingsTypes$ = this.tacoService.findTacoToppingTypes();

    this.subscription = this.tacoService
      .findRecipeById(this.route.snapshot.params.id)
      .subscribe((res: any) => {
        this.recipeFound$ = of(res);
        this.recipeInEdit = res;
        this.updateTacoData(res);

        // tslint:disable-next-line: no-string-literal
        const choiceArray = this.form.controls['toppings'] as FormArray;

        choiceArray.controls.forEach((cntl) => {
          if (this.recipeInEdit.toppings?.includes(cntl.value)) {
            cntl.setValue(true);
          }
        });
        // toppings: this.recipeInEdit.toppings,

        if (this.form) {
          if (this.recipeInEdit) {
            this.form.patchValue({
              recipeName: this.recipeInEdit.recipeName,
              shellType: this.recipeInEdit.shellType,
              proteinType: this.recipeInEdit.proteinType,
              id: this.route.snapshot.params.id,
            });
          }
        }
        localStorage.setItem('EDITRECIPE', JSON.stringify(this.recipeInEdit));
      });

    this.form.valueChanges
      .pipe(filter(() => this.form.valid))
      .subscribe((val) => {
        this.storeFormInLocal();
        const data: Recipe = this.recipeInEdit;
        data.recipeName = this.f.recipeName.value;
        this.updateTacoData(data);
      });
  }

  // tslint:disable-next-line: typedef
  isChecked(cb: string) {
    if (this.recipeInEdit.toppings?.includes(cb)) {
      return true;
    }
    return false;
  }

  updateTacoData(data: TacoData): void {
    const tacoData = { ...data };
    this.tacoStateService.updatedDataSelection(tacoData);
  }

  // tslint:disable-next-line: typedef
  updateLocalToppings(chgdValue: string, checked: boolean) {
    const draft = localStorage.getItem('EDITRECIPE');
    if (draft) {
      const recipe: Recipe = JSON.parse(draft);
      if (checked === false) {
        if (recipe.toppings?.includes(chgdValue)) {
          recipe.toppings.splice(recipe.toppings.indexOf(chgdValue), 1);
        }
      } else {
        if (recipe.toppings?.includes(chgdValue)) {
          return;
        } else {
          recipe.toppings?.push(chgdValue);
        }
      }
      this.recipeInEdit = { ...recipe };

      localStorage.setItem('EDITRECIPE', JSON.stringify(recipe));
    }
  }

  // tslint:disable-next-line: typedef
  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.form.get('toppings') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      this.updateLocalToppings(e.target.value, false);
      let i = 0;
      checkArray.controls.forEach((item: AbstractControl) => {
        if (item.value === e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  // tslint:disable-next-line: typedef
  storeFormInLocal() {
    console.log('storing draft');
    localStorage.setItem('EDITRECIPE', JSON.stringify(this.form.value));

    if (this.recipeInEdit) {
      if (this.recipeInEdit.toppings) {
        this.recipeInEdit.toppings.forEach((topping) => {
          this.updateLocalToppings(topping, true);
        });
      }
    }
    localStorage.setItem('EDITRECIPE', JSON.stringify(this.recipeInEdit));
  }

  // tslint:disable-next-line: typedef
  onSave() {
    const draft = localStorage.getItem('EDITRECIPE');

    if (draft) {
      const recipe: any = JSON.parse(draft);
      console.log(`saving ${JSON.stringify(recipe)}`);
      this.tacoService.saveRecipe(recipe.id, recipe).subscribe(() => {});
    }
  }

  // tslint:disable-next-line: typedef
  get f() {
    return this.form.controls;
  }
}
