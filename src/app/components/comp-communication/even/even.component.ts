import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.less']
})
export class EvenComponent implements OnInit {

  @Input('evenNumber') evenNo : number

  constructor() { }

  ngOnInit(): void {
  }

}
