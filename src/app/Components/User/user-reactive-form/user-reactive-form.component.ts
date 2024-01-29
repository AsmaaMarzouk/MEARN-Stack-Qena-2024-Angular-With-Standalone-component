import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './user-reactive-form.component.html',
  styleUrl: './user-reactive-form.component.scss'
})
export class UserReactiveFormComponent {

  formGroup1:FormGroup;
  constructor(private formbuilder:FormBuilder){
    // this.formGroup1=new FormGroup({
      // controls
    //   firstName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    //   lastName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]{5,}')]),
    //   email:new FormControl('',[Validators.required,Validators.email])


    // });
    this.formGroup1=this.formbuilder.group({
      firstName:['',[Validators.required,Validators.minLength(3)]],
      lastName:['',[Validators.required,Validators.pattern('[a-zA-Z]{5,}')]],
      email:['',[Validators.required,Validators.email]],
      address:this.formbuilder.array([])

    })
  }
  get firstName(){
    return this.formGroup1.get('firstName');
  }

  get address(){
    return this.formGroup1.get('address') as FormArray;

  }

  // address => city ,street , postal code #control

  newAddress():FormGroup{
    return this.formbuilder.group({
      // city:['',[Validators.required,Validators.pattern('')]],
      city:'',
      street:''
    })
  }
  addAddress(){
    this.address.push(this.newAddress())
  }
  removeAddress(i:number){
    // console.log(i);

    this.address.removeAt(i);

  }
}
