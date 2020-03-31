import { Component, OnInit, Input } from '@angular/core';
import {FirebaseService} from "src/app/services/firebase.service";
  import { from } from 'rxjs';
import { element } from 'protractor';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent  implements OnInit{
  selectedAdditional: any = [];
  allProducts: any = [];
  x: any=[];
  @Input() productsExtras: any[];
  //@Output() 
  constructor(private firebaseService:FirebaseService ) { 
    this.firebaseService.getProducts().subscribe({
      next:((value)=> this.allProducts = value )
    })
   
  }

  ngOnInit(): void {
    //this.productsExtras = this.products.filter((product) => product.data.category === 'extras');
    
   //.log(this.x);
   
 
  }
  
  
  // getProductsExtras(){
  
  // }

 
}
