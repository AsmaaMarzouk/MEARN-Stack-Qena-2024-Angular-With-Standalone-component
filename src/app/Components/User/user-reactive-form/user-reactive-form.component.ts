import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './user-reactive-form.component.html',
  styleUrl: './user-reactive-form.component.scss'
})
export class UserReactiveFormComponent {

  formGroup1:FormGroup;
  constructor(){
    this.formGroup1=new FormGroup({
      firstName:new FormControl('',[Validators.required,Validators.minLength(3)]),
      lastName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]{5,}')]),
      email:new FormControl('',[Validators.required,Validators.email])


    });
  }
  get firstName(){
    return this.formGroup1.get('firstName');
  }
}
