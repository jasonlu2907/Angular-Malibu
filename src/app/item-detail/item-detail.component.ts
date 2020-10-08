import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Dish } from '../share/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  dish: Dish;
  dishes: Dish[];

  constructor(private dishService: DishService,
    private route: ActivatedRoute,) {
      
    }

  ngOnInit(): void {
    /**Lay tham so id duoc truyen vao */
    const id = +this.route.snapshot.params['itemId'];
    this.dishService.getDish(id.toString())
                        .subscribe(dish => this.dish = dish);
  }

}
