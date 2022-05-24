import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public texto!: string;
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

  constructor() { }

  ngOnInit(): void {
  }

  setCurrentTabText($event:any){
    this.texto = $event.texto;

  }
}
