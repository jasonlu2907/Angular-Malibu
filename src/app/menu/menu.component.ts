import { Component, OnInit } from '@angular/core';

import { Dish } from '../share/dish';

import { DishService } from '../services/dish.service';
// import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  // animations: [
  //   flyInOut(),
  //   expand()
  // ]
})
export class MenuComponent implements OnInit {
  dishes: Dish[];
  selectedDish: Dish;

  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes);
  }

  onSelectDish(dish : Dish) {
    this.selectedDish = dish;
  }
}
