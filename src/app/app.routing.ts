import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';

const appRoutes: Routes = [
    { path: 'items', component: ItemsComponent },
    { path: '', pathMatch: 'full', redirectTo: 'all'}
];

export const routing = RouterModule.forRoot(appRoutes);