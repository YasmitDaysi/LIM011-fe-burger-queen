import { Injectable } from '@angular/core';
import{AngularFirestore}from '@angular/fire/firestore'
import { from, BehaviorSubject, Observable } from 'rxjs';
import{OnInit}from "@angular/core"

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  //public filteredProducts: any[];
   public allProducts: any[]= [];
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
// console.log(this.categoryValue.value);
    }

  public filteredProducts = new Observable((observer) => {
    //console.log("aqui")
    this.getProducts().subscribe({
      next: (value) => {
        this.allProducts = value;
        //console.log(this.allProducts);
        
      this.currentProduct.subscribe({
        next: ((value : string) => {
        observer.next(this.allProducts.filter(element => element.category === value))
        //console.log(this.productFilter);
      
        })
      //this.firebaseService.getProducts()
      //console.log(this.firebaseService.getProducts());
      })
        }
    })
  })
 
}


 
