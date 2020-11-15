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
  /* Ko nên xài hàm này để return items.length rồi đưa lên shopping cart
  bởi vì nó chỉ đưa về giá trị lúc component mới đc tạo -> lúc đó làm
  gì có item nào trong this.items. That's it. Nó ko nhận update mới
  hơn cho this.items*/
  // getItemsLength() {
  //   return this.items.length;
  // }
}
