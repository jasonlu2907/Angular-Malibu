import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../share/dish';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  dish: Dish;
  dishes: Dish[];

  dishIds: string[];
  prev: string;
  next: string;
  
  constructor(private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location) {
      
    }

  ngOnInit(): void {
    /**Lay tham so id duoc truyen vao */
    // const id = +this.route.snapshot.params['itemId'];
    // this.dishService.getDish(id.toString())
    //                     .subscribe(dish => {this.dish = dish; this.setPrevNext(dish.id);});
  
    this.dishService.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params
    .pipe(switchMap((params: Params) => this.dishService.getDish(params['itemId'])))
      .subscribe(dish => { 
        this.dish = dish; 
        this.setPrevNext(dish.id); 
      });
  }

  goBack() {
    this.location.back();
  }

  setPrevNext(dishID: string) {
    const index = this.dishIds.indexOf(dishID);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

}
