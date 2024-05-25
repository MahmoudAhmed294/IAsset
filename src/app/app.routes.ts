import { Routes } from '@angular/router';
import { authRoutes } from './modules/auth/auth.routes';
import { AuthGuard } from '@Core/guards/auth.guard';
import { HomeComponent } from './modules/home/home/home.component';

export const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: HomeComponent,
  },
  ...authRoutes,
];
