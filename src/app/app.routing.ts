import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { MenuComponent } from './menu/menu.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

const appRoutes: Routes = [
    { path: 'items', component: ItemsComponent },
    { path: '', component: MenuComponent },
    { path: 'items/:itemId', component: ItemDetailComponent },
    

    // { path: '', pathMatch: 'full', redirectTo: 'all'}
];

export const routing = RouterModule.forRoot(appRoutes);