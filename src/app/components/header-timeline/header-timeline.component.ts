import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import {GLOBAL} from '../../services/global';

@Component({
  selector: 'header-timeline',
  templateUrl: './header-timeline.component.html',
  styleUrl: './header-timeline.component.css',
  providers: [UserService]
})
export class HeaderTimelineComponent {

  public identity;
  public url: string

  constructor( private userService: UserService) {
    this.identity = this.userService.getIdentity();
    this.url = GLOBAL.url;
  }

}
