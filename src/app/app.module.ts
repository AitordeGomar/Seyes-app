import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserlistService } from './services/userlist.service';
import {QuestionsService} from './services/questions.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/search/search.component';
import { AddquestionsComponent } from './components/addquestions/addquestions.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LikesComponent } from './components/likes/likes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    SearchComponent,
    AddquestionsComponent,
    UserListComponent,
    FriendsListComponent,
    ProfileComponent,
    LikesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'signup', component: LoginComponent },
      { path: ':username/dashboard', component: DashboardComponent },
      {path:':username/likes',component:LikesComponent},
      {path:':username/search',component:SearchComponent},
      {path:':username/add-questions',component:AddquestionsComponent},
      {path:':username/userlist', component:UserListComponent},
      {path:':username/friendslist', component:FriendsListComponent},
      {path:':username/profile',component:ProfileComponent},
      
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]),
  ],
  providers: [UserlistService, QuestionsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
