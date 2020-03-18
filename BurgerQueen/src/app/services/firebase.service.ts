import { Injectable } from '@angular/core';
import{AngularFirestore}from '@angular/fire/firestore'
import { from, BehaviorSubject } from 'rxjs';
import{OnInit}from "@angular/core"

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  public productFilter: any[];
  private categoryValue = new BehaviorSubject('bebidas');//  es la varriable que se encarga en mostrar el valor inicial 
  currentProduct = this.categoryValue.asObservable();// para que se pueda trabajr mediante un obserbable el cambio de datos
   // AllProducts: any[]
  constructor(private firestore: AngularFirestore) {}
   ngOnInit(): void {
    
  }

  getProducts(){
    return this.firestore.collection('products')
      .valueChanges()
  }

  updateCategory(category: string) {
    this.categoryValue.next(category);
    console.log(this.categoryValue.getValue());
  }
    
}
