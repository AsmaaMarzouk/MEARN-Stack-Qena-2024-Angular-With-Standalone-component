import { Component } from '@angular/core';
import { UsersService } from '../../../Services/users.service';
import { Iuser } from '../../../Model/iuser';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-template-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user-template-form.component.html',
  styleUrl: './user-template-form.component.scss',
})
export class UserTemplateFormComponent {
  constructor(private userService: UsersService,private router:Router) {}
  user:Iuser = {} as Iuser;
  adduser() {
  //   let u: Iuser = {
  //     firstName: 'Sara',
  //     lastName: 'Sayed',
  //     email: 'sara@gmail.com',
  //   };
  //   this.userService.addNewUser(u).subscribe({
  //     next: (user) => {
  //       console.log(user);
  //       this.router.navigate(["Products"])
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     },
  //   });

  this.userService.addNewUser(this.user).subscribe({
    next:(u)=>{
      console.log(u);
      this.router.navigate(['Products'])

    },
    error:(err)=>{
      console.log(err);

    }
  })
}
}
