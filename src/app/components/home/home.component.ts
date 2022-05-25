import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public texto!: string;
  @Input() tabs !: {
    name: string,
    text: string,
  }[];

  constructor() { }

  ngOnInit(): void {
  }

  setCurrentTabText($event:any){
    this.texto = $event.texto;

  }
}
