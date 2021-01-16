import { TacoStateService } from './../../../services/taco-state-service';
import { TacoData } from './../../../entities/taco-data';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { ShellType } from '../../interfaces/taco-interfaces';
import { TacoService } from './../../../services/taco-service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-create-taco-step1',
  templateUrl: './create-taco-step1.component.html',
  styleUrls: ['./create-taco-step1.component.css'],
})
export class CreateTacoStep1Component implements OnInit {
  form: FormGroup = this.fb.group({
    recipeName: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(60)],
    ],
    shellType: ['SOFTSHELL', Validators.required],
  });

  shellTypes$!: Observable<ShellType[]>;

  constructor(
    private fb: FormBuilder,
    private tacoService: TacoService,
    private tacoStateService: TacoStateService
  ) {}

  ngOnInit(): void {
    this.shellTypes$ = this.tacoService.findTacoShellTypes();

    const draft = localStorage.getItem('STEP_1');

    if (draft) {
      this.form.setValue(JSON.parse(draft));
    }

    this.form.valueChanges
      .pipe(filter(() => this.form.valid))
      .subscribe((val) => localStorage.setItem('STEP_1', JSON.stringify(val)));

    const data: TacoData = { recipeName: '' };
    data.recipeName = this.recipeName;
    this.updateTacoData(data);
  }

  updateTacoData(data: TacoData): void {
    const tacoData = { ...data };
    this.tacoStateService.updatedDataSelection(tacoData);
  }

  // tslint:disable-next-line: typedef
  get recipeName() {
    // tslint:disable-next-line: no-string-literal
    return this.form.controls['recipeName'].value;
  }

  // tslint:disable-next-line: typedef
  get f() {
    return this.form.controls;
  }
  // tslint:disable-next-line: typedef
  get shellType() {
    // tslint:disable-next-line: no-string-literal
    return this.form.get('shellType');
  }
}
