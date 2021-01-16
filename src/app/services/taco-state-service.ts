import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TacoData } from '../entities/taco-data';

@Injectable()
export class TacoStateService {
  private dataSource = new BehaviorSubject({ recipeName: '' });
  tacoData = this.dataSource.asObservable();

  constructor() {}

  // tslint:disable-next-line: typedef
  updatedDataSelection(tacoData: TacoData) {
    this.dataSource.next(tacoData);
  }
}
