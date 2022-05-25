import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sb-tabs-angular';
  public tabs = [
    {
      name:'tab 1',
      text:'Texto do primeiro tab'
    },
    {
      name:'tab 2',
      text:'Texto do segundo tab'
    },
    {
      name:'tab 3',
      text:'Texto do terceiro tab'
    },
    {
      name:'tab 4',
      text:'Texto do quarto tab'
    }
  ]
}
