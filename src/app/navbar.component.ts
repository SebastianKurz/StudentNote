import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  template: `
  <div class="pane headerpicture" style="width: 64%;margin: 0 auto;align:center;margin-top:1%;margin-bottom:1%;padding:2% 0 4% 0;">

<h1 style="margin:2%;">{{title}}</h1>

<nav>
<ul>
    <li>Home</li>
    <li>School</li>
    <li>Classes</li>
    <li>Teacher</li>
    <li>Students</li>
    <li>&nbsp;</li>
    <li>LogOff</li>
</ul>
</nav>
</div>

`,
styleUrls: ['./component.css']
})

export class NavbarComponent {
  title = 'Studentnote';
}
