import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserAuthenService } from '../../Services/user-authen.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  userLog:boolean=true;
  constructor(private userAuth:UserAuthenService){
    // this.userLog=this.userAuth.isUserLogged;
  }
  ngOnInit(): void {
    this.userAuth.getUserState().subscribe({
      next:(userr)=>{

        console.log(userr);
        this.userLog=userr;



      },
      error:(error)=>{
        console.log(error);

      }
    })
  }

}
