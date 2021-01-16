import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { ProteinType } from '../../interfaces/taco-interfaces';
import { TacoService } from './../../../services/taco-service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-create-taco-step2',
  templateUrl: './create-taco-step2.component.html',
  styleUrls: ['./create-taco-step2.component.css'],
})
export class CreateTacoStep2Component implements OnInit {
  form: FormGroup = this.fb.group({
    proteinType: ['MEAT', Validators.required],
  });

  proteinTypes$!: Observable<ProteinType[]> | undefined;

  constructor(private fb: FormBuilder, private tacoService: TacoService) {}

  ngOnInit(): void {
    // tslint:disable-next-line: no-non-null-assertion
    this.proteinTypes$ = this.tacoService.findTacoProteinTypes();

    const draft = localStorage.getItem('STEP_2');

    if (draft) {
      this.form.setValue(JSON.parse(draft));
    }

    this.form.valueChanges
      .pipe(filter(() => this.form.valid))
      .subscribe((val) => localStorage.setItem('STEP_2', JSON.stringify(val)));
  }

  get proteinType(): AbstractControl {
    // tslint:disable-next-line: no-string-literal
    return this.form.controls['proteinType'];
  }
}
