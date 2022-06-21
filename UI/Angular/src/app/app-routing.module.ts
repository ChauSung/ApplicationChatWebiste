import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberDetailComponent } from 'members/member-detail/member-detail.component';
import { MemberListComponent } from 'members/member-list/member-list.component';
import { RegisterComponent } from './register/register.component';
import { ListsComponent } from 'members/lists/lists.component';
import { MessagesComponent} from 'members/messages/messages.component';
import { NavComponent } from './nav/nav.component';
const routes: Routes = [
    {path: '', component: RegisterComponent},
    {path: 'members', component: MemberListComponent},
    {path: 'members/:id', component: MemberDetailComponent},
    {path: 'lists', component: ListsComponent},
    {path: 'messages', component: MessagesComponent},
    {path:  '', component: NavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
