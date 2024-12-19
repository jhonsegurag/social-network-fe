import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {GLOBAL} from '../../services/global';

@Component({
  selector: 'header-people',
  templateUrl: './header-people.component.html',
  styleUrl: './header-people.component.css',
  providers: [UserService]
})
export class HeaderPeopleComponent {

  public identity;
  public url: string

  constructor( private userService: UserService) {
    this.identity = this.userService.getIdentity();
    this.url = GLOBAL.url;
  }

}
