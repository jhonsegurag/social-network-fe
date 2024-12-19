import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {GLOBAL} from '../../services/global';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [UserService]
})
export class NavbarComponent {
  public identity;
  public url: string

  constructor( private userService: UserService) {
    this.identity = this.userService.getIdentity();
    this.url = GLOBAL.url;
  }

}
