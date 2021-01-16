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

  form: FormGroup = this.fb.group({
    recipeName: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(60)],
    ],
    shellType: ['SOFTSHELL', Validators.required],
    myChoices: new FormArray([]),
    proteinType: ['MEAT', Validators.required],
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
    this.shellTypes$ = this.tacoService.findTacoShellTypes();
    this.proteinTypes$ = this.tacoService.findTacoProteinTypes();

    this.subscription = this.tacoService
      .findRecipeById(this.route.snapshot.params.id)
      .subscribe((res: any) => {
        this.recipeFound$ = of(res);
        this.recipeInEdit = res;
        this.updateTacoData(res);

        if (this.recipeInEdit) {
          this.form.patchValue({
            recipeName: this.recipeInEdit.recipeName,
            shellType: this.recipeInEdit.shellType,
            myChoices: this.recipeInEdit.toppings,
            ProteinType: this.recipeInEdit.proteinType,
          });
        }
      });

    this.form.valueChanges
      .pipe(filter(() => this.form.valid))
      .subscribe((val) => {
        localStorage.setItem('STEP_1', JSON.stringify(val));

        const data: Recipe = recipeToSave;
        data.recipeName = this.f.recipeName.value;
        this.updateTacoData(data);
      });
  }

  updateTacoData(data: TacoData): void {
    const tacoData = { ...data };
    this.tacoStateService.updatedDataSelection(tacoData);
  }

  // tslint:disable-next-line: typedef
  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.form.get('myChoices') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
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
  onSave() {
    this.shellTypes$ = this.tacoService.findTacoShellTypes();

    const draft = localStorage.getItem('EDITRECIPE');

    if (draft) {
      const recipe = JSON.parse(draft);
    }
    console.log('saving');
  }

  // tslint:disable-next-line: typedef
  get f() {
    return this.form.controls;
  }
}
