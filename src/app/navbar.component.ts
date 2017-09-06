import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  template: `
  <div class="pane headerpicture" style="width: 64%;margin: 0 auto;align:center;margin-top:1%;margin-bottom:1%;padding:2% 0 1% 0;">

<h1 style="margin:2%;">{{title}}</h1>

<nav class="pane" style="padding: 0 0;margin: 0 0;">
<ul>
    <li class="active floatleft home" style="width:30px">&nbsp;</li>
    <li class="active floatleft">School</li>
    <li class="active floatleft">Classes</li>
    <li class="active floatleft">Teacher</li>
    <li class="active floatleft">Students</li>
    <li style="">&nbsp;</li>

    <li class="active floatright logoff" style="width:20px">&nbsp;</li>
</ul>
</nav>
</div>

`,
styleUrls: ['./css/component.css']
})

export class NavbarComponent {
  title = 'Studentnote';
}
