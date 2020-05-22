import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-sample',
  templateUrl: './directives-sample.component.html',
  styleUrls: ['./directives-sample.component.less']
})
export class DirectivesSampleComponent implements OnInit {

  displayPara : boolean = false
  logs : any[] = []

  constructor() { }

  ngOnInit() {

  }
  dispalyDetails() {
    this.displayPara = !this.displayPara
    this.logs.push(this.logs.length +1)
  }

}
