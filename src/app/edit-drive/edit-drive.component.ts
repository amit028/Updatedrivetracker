import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import {ServletService} from '../servlet.service';
import { ActivatedRoute } from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-edit-drive',
  templateUrl: './edit-drive.component.html',
  styleUrls: ['./edit-drive.component.css']
})
export class EditDriveComponent implements OnInit {

  viewDrives:any[];
  singleDrive:any;
  id:number;
  editform:FormGroup;


 

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private _ser:ServletService,private _ar:ActivatedRoute) { }
  
  ngOnInit() {

    this.id=this.data.i;

    
    console.log(this.id);
    this._ser.viewdata().subscribe((e:any)=>{this.viewDrives=e;
    
    for(let i=0; i<this.viewDrives.length; i++)
    {
      if(this.viewDrives[i].id==this.id)
      {
        this.singleDrive=this.viewDrives[i];
      }
    }
    console.log(this.singleDrive);

    });

  


//for edit purpose

      this.editform=new FormGroup({
      id:new FormControl(this.id,[Validators.required]),
      companyname:new FormControl('',[Validators.required]),
      resource:new FormControl('',[Validators.required]),
      exp:new FormControl('',[Validators.required]),
      ctc:new FormControl('',[Validators.required]),
      joining:new FormControl('',[Validators.required]),
      bond:new FormControl('',[Validators.required]),
      position:new FormControl('',[Validators.required]),
      education:new FormControl('',[Validators.required]),
      followup: new FormControl('',[Validators.required]),
      gstno :new FormControl('',[Validators.required,Validators.pattern("[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9]{1}Z[A-Z]{1}")])
      });

}
update() 
{

  this._ser.editData(this.editform.value).subscribe();
  console.log(this.editform.value);
  alert("Drive Updated Successfully");
}
}
