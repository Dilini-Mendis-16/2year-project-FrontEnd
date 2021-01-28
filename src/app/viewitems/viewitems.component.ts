import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RepositoryService } from '../SharedData/repository.service';

@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrls: ['./viewitems.component.css']
})
export class ViewitemsComponent implements OnInit {

  public result:any;

  constructor(private http: HttpClient,private repository: RepositoryService, private route: Router) { }

  ngOnInit(): void {
    this.getAllItems();
  }

  public  getAllItems(){
    this.result=[{itemName:'Beans',qty:10},{itemName:'Carrot',qty:17},{itemName:'Leeks',qty:20},{itemName:'Cabage',qty:50}]

    this.repository.getData('farmer/getall')
    .subscribe(res => {
      this.result = res;
      var myObjStr = JSON.stringify(res);
   
     console.log(this.result);
      
    },
    (error) => {
    })
  }

}
C:\Users\Dilini Mendis\Desktop\SW Prjct\farmer1\src\app\app.component.html