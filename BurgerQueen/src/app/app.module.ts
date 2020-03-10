import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule, FormsModule}from '@angular/forms'


//firebase  
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';  
import { environment } from '../environments/environment';
import{AngularFireStorageModule}from 'angularfire2/storage';
import{AngularFireAuth}from 'angularfire2/auth'; // autenticacion 

//fotawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//servicios
//componentes
import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';
import { ClientNameComponent } from './components/client-name/client-name.component';
import { BtnSendComponent } from './components/btn-send/btn-send.component';

import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ClientNameComponent,
    BtnSendComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFirestoreModule, // imports firebase/storage only needed for storage features
    AngularFireModule.initializeApp(environment.firebase),
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
