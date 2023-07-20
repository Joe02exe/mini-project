import { Component } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../services/user.service';
import { startWith, switchMap } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent {
  allUsers : User[] = []
  selectedUser?: User;

  onSelect(user: User): void {
    this.selectedUser = user;
  }
  constructor(private userService: UserService) {}


  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.changes$.pipe(
      startWith(undefined),
      switchMap(() => this.userService.getUsers())
    ).subscribe(users => this.allUsers = users)
  }

}
