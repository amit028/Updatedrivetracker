import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDriveComponent } from './create-drive/create-drive.component';
import { ViewDriveComponent } from './view-drive/view-drive.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CustpipePipe } from './view-drive/pipe/custpipe.pipe';
import { JoiningPipe } from './view-drive/pipe/joining.pipe';
import { EducationPipe } from './view-drive/pipe/education.pipe';
import { EditDriveComponent } from './edit-drive/edit-drive.component';
 import { RegisterComponent } from './register/register.component';
import { MatSelectFilterModule } from 'mat-select-filter';


@NgModule({
  declarations: [
    AppComponent,
    CreateDriveComponent,
    ViewDriveComponent,
    CustpipePipe,
    JoiningPipe,
    EducationPipe,
    EditDriveComponent,
     RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,HttpClientModule,MatSelectFilterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
