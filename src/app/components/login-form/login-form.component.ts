import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  standalone: true,
  imports: [CardModule]
})
export default class LoginFormComponent {


}
