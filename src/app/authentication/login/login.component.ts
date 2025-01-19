import { Component } from '@angular/core';
import { LoginFormBannerComponent, LoginFormComponent, LoginFormFooterComponent } from 'src/app/components';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [LoginFormComponent, LoginFormBannerComponent, LoginFormFooterComponent, InputTextModule]
})
export default class LoginComponent {

}
