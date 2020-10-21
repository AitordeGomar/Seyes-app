import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserlistService } from './services/userlist.service';
import {QuestionsService} from './services/questions.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/search/search.component';
import { AddquestionsComponent } from './components/addquestions/addquestions.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LikesComponent } from './components/likes/likes.component';
import { VisitprofileComponent } from './components/visitprofile/visitprofile.component';
import { MessageComponent } from './components/message/message.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    SearchComponent,
    AddquestionsComponent,
    UserListComponent,
    FriendsListComponent,
    ProfileComponent,
    LikesComponent,
    VisitprofileComponent,
    MessageComponent,
    NavbarComponent,
    ForbiddenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: ':username/dashboard', component: DashboardComponent },
      {path:':username/likes',component:LikesComponent},
      {path:':username/search',component:SearchComponent},
      {path:':username/add-questions',component:AddquestionsComponent},
      {path:':username/userlist', component:UserListComponent},
      {path:':username/friendslist', component:FriendsListComponent},
      {path:':username/visits/:visitedUser',component:VisitprofileComponent},
      {path:':username/writes/:visitedUser',component:MessageComponent},
      {path:'forbidden', component:ForbiddenComponent},
      {path:':username/profile',component:ProfileComponent},
      
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]),
  ],
  providers: [UserlistService, QuestionsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
