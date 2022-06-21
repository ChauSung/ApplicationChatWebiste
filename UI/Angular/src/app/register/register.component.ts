import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup,FormBuilder  } from '@angular/forms'; 
import { AccountService } from '../services/account.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
  model: any ={};
  // @Input() usersFromNavComponent: any;
  @Output() cancelRegister = new EventEmitter() ;
  cancelled: any;
 
  constructor(private accountService:AccountService) {}
  ngOnInit(): void{


  }
  register(){
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    },error =>{console.log(error);});
  }
  cancel(){
    this.cancelRegister.emit(false);
  }
}
