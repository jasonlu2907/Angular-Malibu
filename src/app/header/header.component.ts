import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CartService } from '../services/cart.service';
import { Dish } from '../share/dish';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  form: FormGroup;

  items: Dish[];

  constructor(private formBuilder: FormBuilder,
    private cartService: CartService) {
    this.form = this.formBuilder.group({
      book: ''
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }
  
}
