// Modules
import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { appRoutingModule, appRoutingProviders } from './app.routing';

// Module Custom
import { MessagesModule} from './messages/messages.module';

// Pages
import { LoginPageComponent } from './pages/login/login-page.component';
import { RegisterComponent } from './pages/register/register.component';
import { TimelinePageComponent } from './pages/timeline/timeline-page.component';
import { ProfilePageComponent } from './pages/profile/profile-page.component';
import { ProfileUpdatePageComponent } from './pages/profile-update/profile-update-page.component';
import { PeoplePageComponent } from './pages/people/people-page.component';


// Components
import { AppComponent } from './app.component';
import { HeaderTimelineComponent } from './components/header-timeline/header-timeline.component';
import { HeaderProfileComponent } from './components/header-profile/header-profile.component';
import { HeaderPeopleComponent } from './components/header-people/header-people.component';
import { LoginComponent } from './components/login/login.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UsersComponent } from './components/users/users.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { PostsTimelineComponent } from './components/posts-timeline/posts-timeline.component';
import { PostsPublishComponent } from './components/posts-publish/posts-publish.component';
import { PostsProfileComponent } from './components/posts-profile/posts-profile.component';
import { PostsPeopleComponent } from './components/posts-people/posts-people.component';
import { PublicationsComponent } from './components/publications/publications.component';

import { FollowingComponent } from './components/following/following.component';
import { FollowedComponent } from './components/followed/followed.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarLeftComponent } from './components/navbar-left/navbar-left.component';
// Services
import {UserService} from './services/user.service';
import {UserGuard} from './services/user.guard';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarLeftComponent,
    LoginPageComponent,
    RegisterComponent,
    HeaderTimelineComponent,
    HeaderProfileComponent,
    HeaderPeopleComponent,
    TimelinePageComponent,
    UserEditComponent,
    UsersComponent,
    LoginComponent,
    SidebarComponent,
    TimelineComponent,
    PostsProfileComponent,
    PostsPublishComponent,
    PostsTimelineComponent,
    PostsPeopleComponent,
    PublicationsComponent,
    ProfilePageComponent,
    ProfileUpdatePageComponent,
    PeoplePageComponent,
    FollowingComponent,
    FollowedComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRoutingModule,
    HttpClientModule,
    MessagesModule
  ],
  providers: [
      appRoutingProviders,
      UserService,
      UserGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
