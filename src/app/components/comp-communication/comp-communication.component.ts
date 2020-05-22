import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-communication',
  templateUrl: './comp-communication.component.html',
  styleUrls: ['./comp-communication.component.less']
})
export class CompCommunicationComponent implements OnInit {

  oddNo : Array<number> = []
  evenNo : Array<number> = []

  startGameVar : any
  constructor() {

  }
  ngOnInit() {
    
  }
  onStartGame(event:any) {
    this.startGameVar = event
    if(this.startGameVar % 2 === 0) {
      this.evenNo.push(this.startGameVar)
    }
    else {
      this.oddNo.push(this.startGameVar)
    }
  }

}
