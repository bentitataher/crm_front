import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

// Import components
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './containers';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/component-user/authentication/login/login.component';
import { RegisterComponent } from './views/component-user/authentication/register/register.component';

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { RegisterCompleteComponent } from './views/component-user/authentication/register-complete/register-complete.component';

// Mes Service
import { AuthenticationService } from '../app/authentication.service'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { PasswordResetComponent } from './views/component-user/authentication/password-reset/password-reset.component';
import { PasswordForgetComponent } from './views/component-user/authentication/password-forget/password-forget.component';
import { EntrepriseGestionComponent } from './views/component-admin/entreprise/entreprise-gestion/entreprise-gestion.component';
import { EntrepriseModificationComponent } from './views/component-admin/entreprise/entreprise-modification/entreprise-modification.component';
import { EntrepriseAjoutComponent } from './views/component-admin/entreprise/entreprise-ajout/entreprise-ajout.component';
import { SecteurAjoutComponent } from './views/component-admin/secteur/secteur-ajout/secteur-ajout.component';
import { SecteurGestionComponent } from './views/component-admin/secteur/secteur-gestion/secteur-gestion.component';
import { SecteurModificationComponent } from './views/component-admin/secteur/secteur-modification/secteur-modification.component';
import { SettingsComponent } from './views/component-admin/settings/settings.component';
import { InterfaceComponent } from './views/component-admin/interface/interface.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    ToasterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    RegisterCompleteComponent,
    PasswordResetComponent,
    PasswordForgetComponent,
    EntrepriseGestionComponent,
    EntrepriseModificationComponent,
    EntrepriseAjoutComponent,
    SecteurAjoutComponent,
    SecteurGestionComponent,
    SecteurModificationComponent,
    SettingsComponent,
    InterfaceComponent,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  },
  ToasterService,
  AuthenticationService,
  AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }
],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
{ }
