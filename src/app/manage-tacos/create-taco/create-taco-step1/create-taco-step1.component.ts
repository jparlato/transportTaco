import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-create-taco-step1',
  templateUrl: './create-taco-step1.component.html',
  styleUrls: ['./create-taco-step1.component.css'],
})
export class CreateTacoStep1Component implements OnInit {
  form = this.fb.group({
    nameOfTaco: [''],

    longDescription: ['', [Validators.required, Validators.minLength(3)]],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
