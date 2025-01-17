import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginFormFooterComponent } from './components/login-form-footer/login-form-footer.component';
import { LoginFormBannerComponent } from './components/login-form-banner/login-form-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginFormFooterComponent,
    LoginFormBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
