import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/component-user/authentication/login/login.component';
import { RegisterComponent } from './views/component-user/authentication//register/register.component';
import { RegisterCompleteComponent } from './views/component-user/authentication/register-complete/register-complete.component';
import { AuthGuard } from './auth.guard';
import { PasswordResetComponent } from './views/component-user/authentication/password-reset/password-reset.component';
import { PasswordForgetComponent } from './views/component-user/authentication/password-forget/password-forget.component';

// Admin Entreprise components
import { EntrepriseAjoutComponent } from './views/component-admin/entreprise/entreprise-ajout/entreprise-ajout.component'
import { EntrepriseModificationComponent } from './views/component-admin/entreprise/entreprise-modification/entreprise-modification.component';
import { EntrepriseGestionComponent } from './views/component-admin/entreprise/entreprise-gestion/entreprise-gestion.component';

// Admin Interface Component
import { InterfaceComponent } from './views/component-admin/interface/interface.component';

// Admin Secteur components
import { SecteurAjoutComponent } from './views/component-admin/secteur/secteur-ajout/secteur-ajout.component';
import { SecteurModificationComponent } from './views/component-admin/secteur/secteur-modification/secteur-modification.component';
import { SecteurGestionComponent } from './views/component-admin/secteur/secteur-gestion/secteur-gestion.component';



export const routes: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'password-forget',
    component: PasswordForgetComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'password-reset/:token',
    component: PasswordResetComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'register-complete/:id',
    component: RegisterCompleteComponent,
  },
  {
    path: 'admin-entreprise-ajout',
    component: EntrepriseAjoutComponent,
  },
  {
    path: 'admin-entreprise-modification/:id',
    component: EntrepriseModificationComponent,
  },
  {
    path: 'admin-entreprise-gestion',
    component: EntrepriseGestionComponent,
  },
  {
    path: 'admin-interface',
    component: InterfaceComponent,
  },
  {
    path: 'admin-secteur-ajout',
    component: SecteurAjoutComponent,
  },
  {
    path: 'admin-secteur-modification/:id',
    component: SecteurModificationComponent,
  },
  {
    path: 'admin-secteur-gestion',
    component: SecteurGestionComponent,
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule),
        canActivate : [AuthGuard]
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule),
        canActivate : [AuthGuard]
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule),
        canActivate : [AuthGuard]
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate : [AuthGuard]
      },
      {
        path: 'editors',
        loadChildren: () => import('./views/editors/editors.module').then(m => m.EditorsModule),
        canActivate : [AuthGuard]
        
      },
      {
        path: 'forms',
        loadChildren: () => import('./views/forms/forms.module').then(m => m.FormsModule),
        canActivate : [AuthGuard]
      },
      {
        path: 'google-maps',
        loadChildren: () => import('./views/google-maps/google-maps.module').then(m => m.GoogleMapsModule),
        canActivate : [AuthGuard]
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule),
        canActivate : [AuthGuard]
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule),
        canActivate : [AuthGuard]
      },
      {
        path: 'plugins',
        loadChildren: () => import('./views/plugins/plugins.module').then(m => m.PluginsModule),
        canActivate : [AuthGuard]
      },
      {
        path: 'tables',
        loadChildren: () => import('./views/tables/tables.module').then(m => m.TablesModule),
        canActivate : [AuthGuard]
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule),
        canActivate : [AuthGuard]
      },
      {
        path: 'apps',
        loadChildren: () => import('./views/apps/apps.module').then(m => m.AppsModule),
        canActivate : [AuthGuard]
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule),
        canActivate : [AuthGuard]
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
