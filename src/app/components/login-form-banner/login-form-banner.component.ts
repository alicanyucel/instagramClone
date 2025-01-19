import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-login-form-banner',
  templateUrl: './login-form-banner.component.html',
  styleUrls: ['./login-form-banner.component.css'],
  imports:[CardModule],
  standalone:true
})
export default class LoginFormBannerComponent {
  

}
