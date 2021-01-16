import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { ToppingType } from '../../interfaces/taco-interfaces';
import { TacoService } from './../../../services/taco-service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-create-taco-step3',
  templateUrl: './create-taco-step3.component.html',
  styleUrls: ['./create-taco-step3.component.css'],
})
export class CreateTacoStep3Component implements OnInit {
  form: FormGroup = this.fb.group({
    toppingsType: ['NONE', Validators.required],
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

  get toppingsType(): AbstractControl {
    // tslint:disable-next-line: no-string-literal
    return this.form.controls['toppingsType'];
  }
}
