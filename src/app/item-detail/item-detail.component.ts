import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../share/dish';
import { DishService } from '../services/dish.service';
import { CartService } from '../services/cart.service';

import { switchMap } from 'rxjs/operators';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  
  form: FormGroup;
  constructor(private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private cartService: CartService,
    private feedbackForm: FormBuilder) {
      this.form = this.feedbackForm.group({
        name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
        comment: ['', [Validators.minLength(5), Validators.maxLength(50)]]
      });
    }

  ngOnInit(): void {
    /**Lay tham so id duoc truyen vao */
    // const id = +this.route.snapshot.params['itemId'];
    // this.dishService.getDish(id.toString())
    //                     .subscribe(dish => {this.dish = dish; this.setPrevNext(dish.id);});
  
    /**Refactor the code above => PREV, NEXT comes in */
    this.dishService.getDishIds()
      .subscribe(dishIds => this.dishIds = dishIds);
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

  addToCart(product: Dish) {
    this.cartService.addToCart(product);
  }

  onSubmit() {
    this.feedbackForm = this.form.value;
    console.log(this.feedbackForm);
    this.form.reset({
      name: '',
      comment: ''
    });
  }

}
