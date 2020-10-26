import { Injectable } from '@angular/core';

import { Dish } from '../share/dish';
import { DISHES } from '../share/dishes';

//Observers
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  items: Dish[] = [];

  constructor() { }

  getDishIds(): Observable<string[] | any> {
    return of(DISHES.map(dish => dish.id ));
  }
  
  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(1000));

    /**Bat dau xai HTTP method */
    // return this.http.get<Dish[]>(baseURL + 'dishes')
    //   .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getDish(id: string): Observable<Dish> {
    return of(DISHES.filter(dish => dish.id === id)[0]).pipe(delay(1000));
  }

}
