import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDriveComponent } from './create-drive/create-drive.component'
import { ViewDriveComponent } from './view-drive/view-drive.component';
import { EditDriveComponent } from './edit-drive/edit-drive.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {path:'Home',component:RegisterComponent},
  {path:'create',component:CreateDriveComponent},
  {path:'view',component:ViewDriveComponent},
  {path:'edit/:id',component:EditDriveComponent,pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
