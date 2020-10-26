import { Injectable } from '@angular/core';

import { Dish } from '../share/dish';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Dish[] = [];
  
  constructor() { }
  
  addToCart(product: Dish) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }
}
