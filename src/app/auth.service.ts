import { Injectable } from '@angular/core';
import { Loginuser } from './loginuser';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService:HttpClient) {}
  public login(userInfo:Loginuser)
   {
    localStorage.setItem('ACCESS TOKEN',"access_token");
     return this.httpService.get<Loginuser>(environment.apiUrl+'/username/'+userInfo.password);
  }
  public isLoggedIn()
  {
    return localStorage.getItem('ACCESS_TOKEN')!==null;
  }
  public logout()
  {
    localStorage.removeItem('ACCESS TOKEN');
  }
}
