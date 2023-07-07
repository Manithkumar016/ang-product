import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-addtolist',
  templateUrl: './addtolist.component.html',
  styleUrls: ['./addtolist.component.css']
})
export class AddtolistComponent {
  pname:any;
  price:any;
  pdesc:any;

  products: any[] =[];
  
  constructor(){
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      this.products = JSON.parse(storedProducts);
    }
  }
  
//function on clicking done button
  doneclick(){
    const newItem = {
      product_name: this.pname,
      price: this.price,
      description: this.pdesc
    };

    this.products.push(newItem);
    localStorage.setItem("products",JSON.stringify(this.products));
    alert(this.pname+" is Added");
    this.pname = null;
    this.price = null;
    this.pdesc = null;
  }
  
}