import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.less']
})
export class ActiveUsersComponent implements OnInit {
 users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.users = this.userService.activeUsers
  }
  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id);
  }

}
