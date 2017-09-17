import {Observable} from 'rxjs/Observable';

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
/*
export function handleError(error: any): Promise<any> {
  console.error('[ERROR] => ', error);
  return Promise.reject(1);
}*/

export function handleError(error: any) {
   let errMsg = (error.message) ? error.message :
   error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
}
