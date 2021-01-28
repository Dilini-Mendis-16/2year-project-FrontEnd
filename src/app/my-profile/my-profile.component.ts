import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RepositoryService } from '../SharedData/repository.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  ngOnInit(): void {
    this.getEmployee(2)
  }
  constructor(private http: HttpClient,private repository: RepositoryService, private route: Router) { }

public result:any;
urllink:string ="assets/images/1.jpg";

// selectFiles(event){
//   if(event.target.files){
//     var reader = new FileReader()
//     reader.readAsDataURL(event.target.files[0])
//     reader.onload = (event:any)=>{
//       this.urllink = event.target.result
//     }
//   }
// }

  

  public  getEmployee(empid){
    this.result={fname:"Kamal" ,lname:"Gunarathne", address:"No.20,Vidya Rd, Kaluthara", mobile:"0715567543", crops:"Potatos",
    description:"10 year experience as agriculture instructor", email:"kamal@gmail.com"}
    this.repository.getData('farmer/profile/'+empid)
    .subscribe(res => {
      this.result = res ;
      
     console.log();
      
    },
    (error) => {
    })
  }

}


