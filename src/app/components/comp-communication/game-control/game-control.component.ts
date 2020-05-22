import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.less']
})
export class GameControlComponent implements OnInit {

  @Output('startGame') start = new EventEmitter<number>();

  myVar : any
  no : number = 0


  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.myVar = setInterval(() => { 
      this.start.emit(this.no+1)
      this.no++
    },1000);
    
  }

   myTimer() {
    var d = new Date();
  }
  onClearGame() {
    clearInterval(this.myVar)
  }

}
