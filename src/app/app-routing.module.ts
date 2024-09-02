import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
  },
  {
    path: 'rh',
    loadChildren: () => import('./rh/rh.module').then( m => m.RhModule ),
  },
  {
    path: 'error',
    component: ErrorPageComponent,
  },
  {
    path: '',
    redirectTo: 'rh',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'error',
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
