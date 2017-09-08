import {Teacher} from '../types/types';

export function sort(array, key,order) {
    if (order=='dsc'){
      return array.sort(function(b, a) {
          var x = a[key]; var y = b[key];
          return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      });
    }else{
      return array.sort(function(a, b) {
          var x = a[key]; var y = b[key];
          return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      });
    }
  }

  export function find(array : any[], key:string, value :number ):any  {
    return array.find(o => o[key] === value);
         }
/*
export function find(array : any[], key:string, value :number ):any{
  for (var i=0; i < array.length; i++) {
       if (array[i][key] === value) {
           return array[i];
       }
   }
}
*/

export function filter(array : any[], key: string, value : any) : any[] {
  return array.filter(o => o[key] === value);
}
