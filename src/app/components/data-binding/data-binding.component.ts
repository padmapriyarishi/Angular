import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.less']
})
export class DataBindingComponent implements OnInit {

  userName : string = ''
  isUser : boolean = false

  constructor() { }

  ngOnInit() {
    if (this.userName === '') {
      this.isUser = true
    }
    else {
      this.isUser = false
    }
  }

  onBtnClick() {
    this.userName = ''
  }

}
