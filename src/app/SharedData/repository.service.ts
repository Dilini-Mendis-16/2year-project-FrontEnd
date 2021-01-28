import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { UserServiceService} from './user-service.service';
import { Observable } from 'rxjs';
import { RouteReuseStrategy } from '@angular/router';

interface userIdIsUnique {
  unique: boolean
}

@Injectable({
  providedIn: 'root'
})

export class RepositoryService {

  public islogged:any;

  constructor( private http: HttpClient, private userurl :UserServiceService) { }

  public getData(route: string) {
    return this.http.get(this.createCompleteRoute(route, this.userurl.farmerUrl),this.generateHeaders());
    
  }
 
  public postData(route: string, body) {
    console.log("9999",body)
    console.log("url---",route)
    return this.http.post(this.createCompleteRoute(route,  this.userurl.farmerUrl),body, this.generateHeaders());
    //return this.http.post(this.createCompleteRoute(route,  this.userurl.farmerUrl),body);
  
  
  }
  
 public isUserIdUnique(userId): Observable<userIdIsUnique> {
   
    return this.http.post<userIdIsUnique>(this.createCompleteRoute('isuniqueemail', this.userurl.farmerUrl), 'c@g.com',this.generateHeaders())

  }
  
  public deleteUser(route: string, body){
    return this.http.post(this.createCompleteRoute(route,  this.userurl.farmerUrl),body, this.generateHeaders());
  }



 /*private createCompleteRoute(route: string, envAddress: string) {
    return `${envAddress}/employee/${route}`;
  }
*/
private createCompleteRoute(route: string, envAddress: string) {
  return `${envAddress}/${route}`;
}

  private generateHeaders() {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json',
                                'Authorization': 'bearer '+localStorage.getItem('token')
                              })
    }

  }
  
  public postTestData(route: string, body) {
    console.log("post test data",body)
    console.log("post test data url---",route)
    return this.http.post(route,body, this.generateHeaders());
  
  
  }
  
 

}

