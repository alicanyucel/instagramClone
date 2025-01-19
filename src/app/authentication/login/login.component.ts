import { Component } from '@angular/core';
import { LoginFormComponent } from 'src/app/components';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone:true,
  imports:[LoginFormComponent]
})
export default class LoginComponent {

}
