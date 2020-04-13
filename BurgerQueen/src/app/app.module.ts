import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule, FormsModule}from '@angular/forms'


//firebase  
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';  
import { environment } from '../environments/environment';
import{AngularFireStorageModule}from 'angularfire2/storage';
// import{AngularFireAuth}from 'angularfire2/auth'; // autenticacion 

//fotawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//servicios
//componentes
import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';

import { from } from 'rxjs';
import { OptionsMenuComponent } from './components/options-menu/options-menu.component';
import { ProductsComponent } from './components/products/products.component';
import { DataOrderComponent } from './components/data-order/data-order.component';
import { AppRoutingModule } from './app-routing.module';
import { KitchenOrderComponent } from './components/kitchen-order/kitchen-order.component';
import { Page404Component } from './components/page404/page404.component';
import { PagesComponent } from './pages/pages/pages.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    OptionsMenuComponent,
    ProductsComponent,
    DataOrderComponent,
    KitchenOrderComponent,
    Page404Component,
    PagesComponent,
  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFirestoreModule, // imports firebase/storage only needed for storage features
    AngularFireModule.initializeApp(environment.firebase),
    FontAwesomeModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
