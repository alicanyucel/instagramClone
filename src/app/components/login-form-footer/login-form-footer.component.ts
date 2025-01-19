import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-login-form-footer',
  templateUrl: './login-form-footer.component.html',
  styleUrls: ['./login-form-footer.component.css'],
  imports:[CardModule],
  standalone:true
})
export default class LoginFormFooterComponent {

}
