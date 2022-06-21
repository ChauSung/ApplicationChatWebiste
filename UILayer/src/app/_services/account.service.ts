import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe, ReplaySubject } from 'rxjs';
import {map} from 'rxjs/operators';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:44366/api/';
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable ();
  constructor(private http: HttpClient) { }

  login(model: any){
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map((user : User) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
   }
  setCurrentUser(user: User){
    this.currentUserSource.next(user) ;
  }
  logout(){
    localStorage.removeItem('user') ;
    this.currentUserSource.next(null!) ;
  }
  register(model:any){
    return this.http.post<User>(this.baseUrl + '/register', model).pipe(
      map(( user:User )=>
        {
          if(user){
            localStorage.setItem('user', JSON.stringify(user)) ;
            this.currentUserSource.next(user) ;
          }
          return user
        })
    ) ;
  }
}