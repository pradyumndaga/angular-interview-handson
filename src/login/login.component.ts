import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  @Input() message: string;
  @Output() username = new EventEmitter();
  login = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor() {}
  ngOnInit() {}

  onSubmit() {
    if (this.login.valid) {
      this.username.emit(this.login.value.email)
      console.log('Login Success', this.login.value);
    }
  }
}
