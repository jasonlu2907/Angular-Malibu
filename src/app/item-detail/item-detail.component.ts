import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../share/dish';
import { Comment } from '../share/comment';
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
  comment: Comment;

  constructor(private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private cartService: CartService,
    private feedbackForm: FormBuilder) {
      // Khai bao cung datatype kieu Comment
      this.form = this.feedbackForm.group({
        author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
        comment: ['', [Validators.minLength(5), Validators.maxLength(50)]],
        rating: 5
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
    this.comment = this.form.value;
    this.comment.date = new Date().toISOString();

    // Adding comment
    this.dish.comments.push(this.comment);
    console.log(this.feedbackForm);

    this.form.reset({
      name: '',
      comment: '',
      rating: 5
    });
  }

}
