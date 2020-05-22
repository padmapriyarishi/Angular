import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-services-pract',
  templateUrl: './services-pract.component.html',
  styleUrls: ['./services-pract.component.less']
})
export class ServicesPractComponent implements OnInit {

  constructor(private userService : UserService) { }

  ngOnInit(): void {
  
  }

  

}
