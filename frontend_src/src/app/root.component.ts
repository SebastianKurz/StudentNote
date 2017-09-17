import { Component } from '@angular/core';

import { GlobalStatus } from './service/local.service';

@Component({
  selector: 'root',
  template: `
<router-outlet></router-outlet>

<div style="text-align:center;color:#b0b0b0">
&copy; {{copy}}
</div>

<div  *ngIf="isStatus()" class="status" style="text-align:center;" (click)="unsetStatus()">
{{this.globalstatus.getStatus()}}
</div>
`,
styleUrls: ['./css/component.css']
})

export class Root {
  copy="2017 | Lucas Wiemers, Sebastian Kurz";
  status;
  private globalstatus : GlobalStatus;

constructor(private globalstatusImpl : GlobalStatus){
this.globalstatus=globalstatusImpl;
}
isStatus(){
  if (this.globalstatus.getStatus() != "" && this.globalstatus.getStatus() != null){return true;}
  else{return false;}
}
unsetStatus(){
  this.globalstatus.unsetStatus();
}

}
