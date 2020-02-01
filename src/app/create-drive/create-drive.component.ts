import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ServletService } from '../servlet.service';


@Component({
  selector: 'app-create-drive',
  templateUrl: './create-drive.component.html',
  styleUrls: ['./create-drive.component.css']
})
export class CreateDriveComponent implements OnInit {

   driveform:FormGroup;

   constructor(private _servletService:ServletService){}
    GSTvalidation="\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}"
  ngOnInit()
  {
    this.driveform=new FormGroup({
    companyname:new FormControl('',[Validators.required]),
    resource: new FormControl('',[Validators.required]),
    exp:new FormControl('',[Validators.required]),
    ctc:new FormControl('',[Validators.required]),
    position:new FormControl('',[Validators.required]),
    joining:new FormControl('',[Validators.required]),
    education:new FormControl('',[Validators.required]),
    followup: new FormControl('',[Validators.required]),
    bond:new FormControl('',[Validators.required]),
    gstno :new FormControl('',[Validators.required,Validators.pattern("[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9]{1}Z[A-Z]{1}")])
    });
  }

  submit() {
    this._servletService.register(this.driveform.value).subscribe();
   
    }
}
