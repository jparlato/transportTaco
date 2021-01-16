import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-taco',
  templateUrl: './create-taco.component.html',
  styleUrls: ['./create-taco.component.css'],
})
export class CreateTacoComponent implements OnInit {
  constructor() {}

  // tslint:disable-next-line: typedef
  onSaveRecipe() {
    console.log('hello');
    const draft = localStorage.getItem('STEP_1');
    console.log(draft);
  }

  ngOnInit(): void {}
}
