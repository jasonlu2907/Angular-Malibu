import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { MenuComponent } from './menu/menu.component'

const appRoutes: Routes = [
    { path: 'items', component: ItemsComponent },
    { path: '', component: MenuComponent },

    // { path: '', pathMatch: 'full', redirectTo: 'all'}
];

export const routing = RouterModule.forRoot(appRoutes);