import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  form:FormGroup;
  constructor(){
    this.form =  new FormGroup({
      username:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9']*"),Validators.maxLength(3)]),
      password:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9']*"),Validators.maxLength(6)])

    })
  }
  get u(){
    return this.form.controls;
  }
  get p(){
    return this.form.controls;
  }
  login():void{
    console.log(this.form.value);
  }
}
