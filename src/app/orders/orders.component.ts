import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { RepositoryService } from '../SharedData/repository.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Item } from '../interfaces/Item';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private http: HttpClient,private repository: RepositoryService, private route: Router) { }
  public orderForm:FormGroup;

  ngOnInit(): void {

    this.orderForm = new FormGroup({
      itemName:new FormControl(''),
quantity:new FormControl(''),
unitPrice:new FormControl(''),
expireDate:new FormControl(''),
harvestDate:new FormControl(''),

    })
  }

  public addOrders(value){
    //console.log(value);
  
    // var formData = new FormData();
    // formData.append('vegetable_type',value.itemName);
    // formData.append('quantity',value.quantity);
    //     formData.append('unit_price',value.unitPrice);
    //     formData.append('expired_date',value.expireDate);
    //     formData.append('harvest_date',value.harvestDate);

        let t: Item = {
         
          
          itemName:value.itemName,
quantity:value.quantity,
unitPrice:value.unitPrice,
expireDate:value.expireDate,
harvestDate:value.harvestDate
      
          };

    let apiUrl = 'farmer/addItem';
      console.log("kkkkk---",t)
    this.repository.postData(apiUrl, t)
      .subscribe(res => {
  console.log("----",res)
        },
        (error => {
          
        })
      )
  
  
  }

}
