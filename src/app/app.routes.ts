import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PriceComponent } from './price/price.component';
import { AboutComponent } from './about/about.component';
import { ReviewComponent } from './review/review.component';
import { ReserveComponent } from './reserve/reserve.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'service', component: ServicesComponent },
    { path: 'price', component: PriceComponent },
    { path: 'about', component: AboutComponent },
    { path: 'review', component: ReviewComponent },
    { path: 'reserve', component: ReserveComponent }
];
