import { Injectable } from '@angular/core';
import{AngularFirestore}from '@angular/fire/firestore'
import { from, BehaviorSubject, Observable } from 'rxjs';
import{map} from 'rxjs/operators'
import{OnInit}from "@angular/core"

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

   public allProducts: any[]= [];
  private categoryValue = new BehaviorSubject('bebidas');//  es la varriable que se encarga en mostrar el valor inicial 
  currentProduct = this.categoryValue.asObservable();// para que se pueda trabajr mediante un obserbable el cambio de datos

  prueba: any[]
  
  constructor(private firestore: AngularFirestore) {}
   ngOnInit(): void {

    
  }

  
  public products:any[];
    
  public getProducts() {
   this.products = [];
   return this.firestore.collection('products').snapshotChanges().pipe( map((productsSnapshot:any) => {
    
    productsSnapshot.forEach((productData: any) => {
       this.products.push({
         id: productData.payload.doc.id,
         data: productData.payload.doc.data()
       });
     
     });
     return this.products;
     //console.log(this.products);
     
    
   }));
    //return this.products;
  }

    updateCategory(category: string) {
    this.categoryValue.next(category);

    }

  public filteredProducts = new Observable((observer) => {
    this.getProducts().subscribe({
      next: (value) => {
        console.log(value);
        
        this.allProducts = value;

      this.currentProduct.subscribe({
        next: ((value : string) => {
        observer.next(this.allProducts.filter(element => element.data.category === value))

        })

      })
        }
    })

  })

 
}


 
