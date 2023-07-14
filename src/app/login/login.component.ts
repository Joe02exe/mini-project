import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user/user';
import { MockAuthentificationService } from '../mock-authentification.service';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hidePassword = true;

  user? : User

  form: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  });

  constructor(private router: Router, private userService: UserService,private mockAuthentificationService : MockAuthentificationService) { }


  ngOnInit(): void {
    //this.userService.getUser(this.username.value).subscribe(u => this.user = u)
  }
  //TODO: make this work
  login() {
    //console.log(this.username.value + this.password.value)
    //if (this.user?.password == this.password.value) {
      // look at <routerlink>
    this.mockAuthentificationService.user = {_id: uuidv4(), username: "john", firstName: "John", lastName: "Doe", password: "passwd", birthDate: new Date("2000-01-01"), role: "admin", email: "test@gmail.com"}
    if (true) {
      this.router.navigate(['../dashboard'])
    }
  }

  get username(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }
}
