import { Component} from '@angular/core';
// import { ConnectionService } from 'src/app/services/connection.service';
import{FormGroup,FormControl}from '@angular/forms'
import{DataOrderService} from 'src/app/services/data-order.service'
import{FirebaseService} from "src/app/services/firebase.service"

@Component({
  selector: 'app-client-name',
  templateUrl: './client-name.component.html',
  styleUrls: ['./client-name.component.scss']
})
export class ClientNameComponent  {
 nameForm = new FormGroup({
   nameValue: new FormControl('')
 });
  constructor(private dataOrderService:DataOrderService,private firebaseService:FirebaseService ){}
  captureName(){
    console.log(this.nameForm.value.nameValue);
  this.firebaseService.getProducts();
    
    this.dataOrderService.saveClientName(this.nameForm.value.nameValue);
  }


}
