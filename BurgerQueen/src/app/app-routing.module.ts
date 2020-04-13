import { PagesComponent } from './pages/pages/pages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ Routes, RouterModule } from '@angular/router';
import{ KitchenOrderComponent} from '../app/components/kitchen-order/kitchen-order.component';
import{Page404Component } from '../app/components/page404/page404.component';
import{SummaryOrderComponent} from'../app/components/summary-order/summary-order.component';

const routes: Routes = [
{path: '', component: PagesComponent},
{ path:'kitchen', component: KitchenOrderComponent},
{path:'summary', component: SummaryOrderComponent},

{ path:'**', component: Page404Component}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
