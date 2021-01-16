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
    private tacoStateService: TacoStateService
  ) {}

  // tslint:disable-next-line: typedef
  onSaveRecipe() {
    console.log('hello');
    const draft = localStorage.getItem('STEP_1');
    console.log(draft);
  }

  ngOnInit(): void {
    this.tacoData$ = this.tacoStateService.tacoData;
  }

  // tslint:disable-next-line: typedef
  get f() {
    return this.form.controls;
  }
}
