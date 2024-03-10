//angular imports***********************************************************************
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import fa from '@angular/common/locales/fa';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//ng Zorro imports**********************************************************************
import { en_US } from 'ng-zorro-antd/i18n';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { registerLocaleData } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NZ_I18N, fa_IR } from 'ng-zorro-antd/i18n';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
//Component Imports *********************************************************************
import { LandingPageComponent } from './layouts/landing-page/page-one/landing-page.component';
import { LandingPage2Component } from './layouts/landing-page/landing-page2/landing-page2.component';
import { SwiperModule } from 'swiper/angular';
import { Page3Component } from './layouts/landing-page/page3/page3.component';
registerLocaleData(fa);
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingPage2Component,
    Page3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SwiperModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzModalModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
