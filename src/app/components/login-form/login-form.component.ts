import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {DividerModule} from 'primeng/divider';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  standalone: true,
  imports: [CardModule,InputTextModule,CommonModule,ButtonModule,DividerModule]
})
export default class LoginFormComponent {


}
