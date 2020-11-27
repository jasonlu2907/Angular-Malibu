import { Component, OnInit } from '@angular/core';

import { Dish } from '../share/dish';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: Dish[] = this.cartService.getItems();
  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // this.items = this.cartService.getItems();
  }

  removeItem(ind: number) {
    this.cartService.removeFromCart(ind);
  }
}
