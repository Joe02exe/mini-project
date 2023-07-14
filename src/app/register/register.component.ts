import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { UserService } from '../user.service';
import { v4 as uuidv4 } from 'uuid';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  hidePassword = true;
  hidePasswordConfirm = true;

  form: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'firstName' : new FormControl(),
    'lastName': new FormControl(),
    'username': new FormControl(null, [Validators.required]),
    'birthDate': new FormControl(),
    'password': new FormControl(null, [Validators.required]),
    'passwordConfirm': new FormControl(null, [Validators.required])
  },
  );

  constructor(private userService: UserService, private router: Router) { }

  register() {
    console.log(this.birthDate.value + this.lastName.value + this.firstName.value + this.email.value + this.username.value + this.birthDate.value)
    this.userService.addUser({
      _id: uuidv4(),
      role: "user",
      birthDate: this.birthDate.value,
      lastName: this.lastName.value,
      firstName: this.firstName.value,
      email: this.email.value,
      password: this.password.value,
      username: this.username.value
    }).pipe(
      tap(_ => this.router.navigate(['../login']))
    ).subscribe();
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get username(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  get firstName(): FormControl {
    return this.form.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.form.get('lastName') as FormControl;
  }
  get passwordConfirm(): FormControl {
    return this.form.get('passwordConfirm') as FormControl;
  }
  get birthDate(): FormControl {
    return this.form.get('birthDate') as FormControl;
  }

}
