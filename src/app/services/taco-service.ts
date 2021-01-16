import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShellType } from '../manage-tacos/interfaces/taco-interfaces';
import { map } from 'rxjs/operators';

const SHELLTYPES = 'shellTypes';

@Injectable()
export class TacoService {
  constructor(private http: HttpClient) {}

  // findCourseById(courseId: number): Observable<Course> {
  //     return this.http.get<Course>(`/api/courses/${courseId}`);
  // }

  // tslint:disable-next-line: typedef
  findTacoShellTypes() {
    return this.http
      .get(`/api/getShellTypes`)
      .pipe(map((res: any) => res['shellTypes']));
  }

  // tslint:disable-next-line: typedef
  findTacoProteinTypes() {
    return this.http
      .get(`/api/getProteinTypes`)
      .pipe(map((res: any) => res['ProteinTypes']));
  }

  // tslint:disable-next-line: typedef
  findTacoToppingTypes() {
    return this.http
      .get(`/api/getToppingTypes`)
      .pipe(map((res: any) => res['ToppingTypes']));
  }

  // findAllCourses(): Observable<Course[]> {
  //     return this.http.get('/api/courses')
  //         .pipe(
  //             map(res => res['payload'])
  //         );
  // }

  // findAllCourseLessons(courseId:number): Observable<Lesson[]> {
  //     return this.http.get('/api/lessons', {
  //         params: new HttpParams()
  //             .set('courseId', courseId.toString())
  //             .set('pageNumber', '0')
  //             .set('pageSize', '1000')
  //     }).pipe(
  //         map(res =>  res['payload'])
  //     );
  // }

  // findLessons(
  //     courseId:number, filter = '', sortOrder = 'asc',
  //     pageNumber = 0, pageSize = 3):  Observable<Lesson[]> {

  //     return this.http.get('/api/lessons', {
  //         params: new HttpParams()
  //             .set('courseId', courseId.toString())
  //             .set('filter', filter)
  //             .set('sortOrder', sortOrder)
  //             .set('pageNumber', pageNumber.toString())
  //             .set('pageSize', pageSize.toString())
  //     }).pipe(
  //         map(res =>  res['payload'])
  //     );
  // }
}
