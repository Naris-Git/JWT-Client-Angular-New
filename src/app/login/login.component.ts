import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JwtclientService } from '../jwtclient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;

constructor(private jwtclientService:JwtclientService,
  private roter: Router
){

}

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.formGroup=new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  loginProcess(){
    console.log("form validation", this.formGroup.valid);
if(this.formGroup.valid){
 
  this.jwtclientService.generateToken(this.formGroup.value)
  .subscribe((result)=>{
    console.log("result data", result);
    if(result!=null){
      this.roter.navigateByUrl('/users')
      alert("Successfully login..");
    }
    else{
      alert("Login Unsuccessfully..")
    }
  })
}
  }

}
