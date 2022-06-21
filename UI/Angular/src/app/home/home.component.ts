import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user:any ={};
  constructor (private http: HttpClient) {}

   ngOnInit(): void {
       this.getUsers();
   }
  getUsers() {
    this.http.get('https://localhost:44366/api/Home').subscribe(
      Response => {
        this.user = Response;
      }, error => {
        console.log(error);
      }
    )
  }

}