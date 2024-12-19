import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {GLOBAL} from '../../services/global';

@Component({
  selector: 'header-profile',
  templateUrl: './header-profile.component.html',
  styleUrl: './header-profile.component.css',
  providers: [UserService]
})
export class HeaderProfileComponent {

  public identity;
  public url: string

  constructor( private userService: UserService) {
    this.identity = this.userService.getIdentity();
    this.url = GLOBAL.url;
  }

}
