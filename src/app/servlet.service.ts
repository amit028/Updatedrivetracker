import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServletService {

  
  constructor(private _http:HttpClient) { }

  register(u)
  {
    return this._http.post("http://3.12.103.57:8080/DriveTracker/CreateDrive",u);
  }

  viewdata()
  {
    return this._http.get("http://3.12.103.57:8080/DriveTracker/ViewData");
  }

  deleteData(cid)
  {
    return this._http.post("http://3.12.103.57:8080/DriveTracker/DeleteData",cid);
  }

  editData(id)
  {
    return this._http.post("http://3.12.103.57:8080/DriveTracker/EditData",id);
  }
  RegisterData(i)
  {
    return this._http.post("http://3.12.103.57:8080/DriveTracker/RegisterData",i);
  }

}
