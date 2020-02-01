import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'education'
})
export class EducationPipe implements PipeTransform {

  transform(value:number, education: any): any {
    if(value==0)
    {
      return "BE."
    }
    else if(value==1)
    {
      return "BCA/MCA"
    }
    else
    {
      return "Other"
    }
  }

}
