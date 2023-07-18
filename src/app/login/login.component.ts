import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../user/user';
import { MockAuthentificationService } from '../services/mock-authentification.service';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hidePassword = true;

  error = ""

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
    const username = this.username.value;
    const password = this.password.value;
  
    this.userService.getUser(username).subscribe(
      (user) => {
        if (user && user.password == this.password.value) {
          this.user = user;
          this.mockAuthentificationService.login(user)
          this.router.navigate(['/dashboard']);
          console.log("navigated")
        } else {
          this.error = "Invalid credentials!"
        }
      },
      (error) => {
        console.error("Error occurred:", error);
      }
    );
  }
  
  get username(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }
}
