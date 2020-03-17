import { Component, OnInit } from '@angular/core';
import{FirebaseService} from "src/app/services/firebase.service"

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  allProducts: any[];
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit(): void {
  }
  products(){
    this.firebaseService.getProducts().subscribe({
      next: (value) => {
        this.allProducts = value;
        console.log(this.allProducts);
        
      }
    })
    //this.firebaseService.getProducts()
  //console.log(this.firebaseService.getProducts());
    
  }

}
