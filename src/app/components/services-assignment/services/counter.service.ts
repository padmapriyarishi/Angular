import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activeCounter = 0
  inActiveCounter = 0

  constructor() { }

  onActiveCounter()  {
    this.activeCounter++  
  }
  OnInactiveCounter()  {
    this.inActiveCounter++
  }
}
