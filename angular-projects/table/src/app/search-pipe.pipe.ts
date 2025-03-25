import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(value:any, searchValue:any) {
    if(!searchValue){
      return value;
    }

    return value.filter((el:any) =>{
        return (el.id.includes(searchValue) || el.email.includes(searchValue))
       })
    
  }

}
