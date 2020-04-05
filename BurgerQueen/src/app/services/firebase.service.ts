import { Injectable } from '@angular/core';
import{AngularFirestore}from '@angular/fire/firestore'
import { from, BehaviorSubject, Observable } from 'rxjs';
import{map} from 'rxjs/operators'
import{OnInit}from "@angular/core"
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
 public extraProducts = new BehaviorSubject([]);
 public currentExtraProducts = this.extraProducts.asObservable();
   public allProducts: any[]= [];
   private opcionMecio = new BehaviorSubject('menu');
   
   currentMenu = this.opcionMecio.asObservable();
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
    // getOpcionMenu(menu: string){
      

    // }

  public filteredProducts = new Observable((observer) => {
    this.getProducts().subscribe({
      next: (value) => {
      //  console.log(value);
        
        this.allProducts = value;
this.extraProducts.next(value.filter((element)=>element.data.category === 'extras')) 

      this.currentProduct.subscribe({
        next: ((value : string) => {
        observer.next(this.allProducts.filter(element => element.data.category === value))

        })

      })
        }
    })

  })

  sendOrderToKitchen(obj){
return this.firestore.collection('kitchen').add(obj);
  }
}


 
