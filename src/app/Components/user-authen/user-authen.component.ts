import { Component } from '@angular/core';
import { UserAuthenService } from '../../Services/user-authen.service';

@Component({
  selector: 'app-user-authen',
  standalone: true,
  imports: [],
  templateUrl: './user-authen.component.html',
  styleUrl: './user-authen.component.scss'
})
export class UserAuthenComponent {
  isUser: boolean=true;
constructor(private userAuth:UserAuthenService){
  this.isUser=this.userAuth.isUserLogged;
}
loginFunc(){
  this.userAuth.login("asd@gmail","11111");

  this.isUser=this.userAuth.isUserLogged;//true
}
logoutFunc(){
  this.userAuth.logout();
  this.isUser=this.userAuth.isUserLogged;//false

}
}
