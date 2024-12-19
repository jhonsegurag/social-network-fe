import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrl: './navbar-left.component.css',
  providers: [UserService]
})
export class NavbarLeftComponent {
public identity;

constructor(
  private _router: Router, 
  private _userService: UserService ) {}

ngOnInit() {
    this.identity = this._userService.getIdentity();
}

logout(){
  localStorage.clear
  this.identity = null;
  this._router.navigate(['/']);
}


}
