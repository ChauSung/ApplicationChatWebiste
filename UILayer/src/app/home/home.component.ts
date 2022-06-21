import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  registerModel = false;

  constructor() { }

  ngOnInit(): void {
  }

  registerToggle(){
    this.registerModel = !this.registerModel;
  }

  cancelRegisterModel(event: boolean){
    this.registerModel= event;
}
}
