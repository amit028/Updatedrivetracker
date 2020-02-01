import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custpipe'
})
export class CustpipePipe implements PipeTransform {

  transform(value: String, position: any):any {
    if(position==0)
    {
      return "Full stack developer";
    }
    else if(position==1)
    {
      return "Ui developer";
    }
    else if(position==2)
    {
      return "Backend developer";
    }
    else(position==3)
    {
      return "Testing Engineer"
    }
  }

}
