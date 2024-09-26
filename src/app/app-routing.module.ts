import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthGuard } from './auth/guards/auth.guard';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
  },
  {
    path: 'rh',
    loadChildren: () => import('./rh/rh.module').then( m => m.RhModule ),
    canActivate:[AuthGuard],
    canMatch: [AuthGuard]
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
