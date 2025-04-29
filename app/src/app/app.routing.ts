import { Routes } from '@angular/router';

import { AuthGuard } from './authentication/guard/auth.guard';
import { Roles } from './authentication/guard/roles';
import { AppBlankComponent } from './shared/layouts/blank/blank.component';
import { FullComponent } from './shared/layouts/full/full.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      
      {
          path: '',
          redirectTo: '/dashboard',
          pathMatch: 'full'
      },
      
      //CONSULTAS
      {
        path: 'dashboard',
        //canActivate: [AuthGuard],
        loadChildren: () => import('./modules/00-dashboard/dashboard.module').then(m => m.DashboardModule)
      },


      //ADMIN
      {
        path: 'settings',
        //canActivate: [AuthGuard],
        loadChildren: () => import('./modules/01-admin/01-settings/settings.module').then(m => m.SettingsModule)
      },      

      
      
    ]
  },

  {
    path: '',
    component: AppBlankComponent,
      children: [
        {
            path: 'authentication',
            loadChildren:
                () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
        }
      ]
  },
  {
      path: '**',
      redirectTo: 'authentication/404'
  }
];
