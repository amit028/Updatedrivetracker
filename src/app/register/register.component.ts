import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServletService } from '../servlet.service';
import { MAT_DATEPICKER_VALIDATORS } from '@angular/material/datepicker';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  Signupform:FormGroup;
 constructor(private _servletService:ServletService){}
   
 ngOnInit()
 {
 this.Signupform= new FormGroup({
  
   username: new FormControl('',[Validators.required]),
   ppassword: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
   Conpassword: new FormControl('',[Validators.required , Validators.minLength(8), Validators.maxLength(12)]),
   email :new FormControl('',[Validators.required,Validators.email]),
   Mobilenum:new FormControl('',[Validators.required]),
   Bdate : new FormControl('',[Validators.required])
 });
}

 submit() {
   this._servletService.RegisterData(this.Signupform.value).subscribe()
   }

}
