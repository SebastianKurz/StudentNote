import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(items: any[], term: string): any {
       // I am unsure what id is here. did you mean title?
       return items.filter(item => item.id.indexOf(term) !== -1);
   }
}
