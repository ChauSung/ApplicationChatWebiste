import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../_models/user';
import {RegisterComponent} from '../register/register.component';
import { Router } from '@angular/router';

import {ToastrModule, ToastrService} from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  model : any = {};
  users :any;
  // currentUser$: Observable<User> | undefined;

  constructor( private http:HttpClient, public accountService: AccountService, private router: Router,
    private toastr: ToastrService){}
  ngOnInit(): void{
    // this.currentUser$ = this.accountService.currentUser$
    // this.getUser();

  }
  login(){
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/members');
    },error=>{console.log(error);
      this.toastr.error(error.error);
    }
   )
  }
  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
 
  getUser(){
    this.http.get('https://localhost:44366/api/Home').subscribe(users=> this.users = users)
  }

 
}