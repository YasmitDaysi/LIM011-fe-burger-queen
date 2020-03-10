import { Injectable } from '@angular/core';
import{AngularFirestore}from '@angular/fire/firestore'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  getProducts(){
    //return this.firestore.collection('products').snapshotChanges();
    this.firestore.collection('products')
      .valueChanges()
      .subscribe({
        next: (values) => console.log(values)         
      })
    
  }

}
