import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-taco',
  templateUrl: './manage-taco.component.html',
  styleUrls: ['./manage-taco.component.css'],
})
export class ManageTacoComponent implements OnInit {
  selectedItem = '';

  listItems = [
    { linkTitle: 'Home', link: '/home', icon: 'home' },
    { linkTitle: 'Create', link: '/manage-tacos/create-taco', icon: 'edit' },
  ];

  constructor() {}

  handleClick(selectedItem: { linkTitle: string }): void {
    this.selectedItem = selectedItem.linkTitle;
  }

  ngOnInit(): void {}
}
