import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { TacoService } from './../../../services/taco-service';
import { ToppingType } from '../../interfaces/taco-interfaces';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-create-taco-step3',
  templateUrl: './create-taco-step3.component.html',
  styleUrls: ['./create-taco-step3.component.css'],
})
export class CreateTacoStep3Component implements OnInit {
  form: FormGroup = this.fb.group({
    toppingsType: ['NONE', Validators.required],
    toppings: new FormArray([]),
  });

  toppingsTypes$!: Observable<ToppingType[]> | undefined;

  constructor(private fb: FormBuilder, private tacoService: TacoService) {}

  ngOnInit(): void {
    // tslint:disable-next-line: no-non-null-assertion
    this.toppingsTypes$ = this.tacoService.findTacoToppingTypes();

    const draft = localStorage.getItem('STEP_3');

    if (draft) {
      this.form.setValue(JSON.parse(draft));
    }

    this.form.valueChanges
      .pipe(filter(() => this.form.valid))
      .subscribe((val) => localStorage.setItem('STEP_3', JSON.stringify(val)));
  }

  // tslint:disable-next-line: typedef
  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.form.get('toppings') as FormArray;

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

  get toppingsType(): AbstractControl {
    // tslint:disable-next-line: no-string-literal
    return this.form.controls['toppingsType'];
  }
}
