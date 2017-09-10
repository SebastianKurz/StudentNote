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

  export function find(array : any[], key:string, value):any  {
    return array.find(o => o[key] === value);
         }

export function filter(array : any[], key: string, value) : any[] {
    return array.filter(o => o[key] === value);
}

export function update (obj, key, value){
  return obj[key]=value;
}
