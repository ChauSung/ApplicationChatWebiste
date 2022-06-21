import { Component } from '@angular/core';
import { AccountService } from './services/account.service';
import { User } from './_models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title ="The Wedapp";
  constructor( private accountService: AccountService){}
  ngOnInit() {
    this.setCurrentUser();
  }
  setCurrentUser(){
    const user : User = JSON.parse(localStorage.getItem('user') || '{}');
    this.accountService.setCurrentUser(user);
  }
  
}
