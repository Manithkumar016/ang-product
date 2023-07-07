import { Component} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-listofproduct',
  templateUrl: './listofproduct.component.html',
  styleUrls: ['./listofproduct.component.css'],
})
export class ListofproductComponent {

products: any[]=[];

  constructor(){
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      this.products = JSON.parse(storedProducts);
    }
  }

  //function on clickng the delete icon with alert message
  deletehandle(product:any){
      alert(this.products[this.products.indexOf(product)].product_name +" is deleted");
      this.products.splice(this.products.indexOf(product),1);
      localStorage.setItem("products",JSON.stringify(this.products));
  }  

  
}

   