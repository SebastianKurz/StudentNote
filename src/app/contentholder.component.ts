import { Component } from '@angular/core';

@Component({
  selector: 'content',
  template: `
  <h1>{{title}}</h1>
  Hier kommt dann der jeweilige inhalt rein
  Text ... blabla
   `
})

export class ContentHolderComponent {
  title = 'CLASSES';
}
