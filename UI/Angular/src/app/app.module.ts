import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// Cấu hình
import {HttpClientModule} from '@angular/common/http';

// Thư viện
import { NavComponent } from './nav/nav.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule,  } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ListsComponent } from 'members/lists/lists.component';
import { MemberDetailComponent } from 'members/member-detail/member-detail.component';
import { MemberListComponent } from 'members/member-list/member-list.component';
import { MessagesComponent } from 'members/messages/messages.component';
import {ToastrModule} from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    RegisterComponent,
    ListsComponent,
    MemberDetailComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent
    
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    NgbModule,
    NgbDropdownModule,
    // BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right'
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
