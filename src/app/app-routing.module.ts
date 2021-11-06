import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {DetailComponent} from "./pages/detail/detail.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {UnauthorizedComponent} from "./pages/unauthorized/unauthorized.component";
import {AuthGuard} from "./guards/auth.guard";
import {Role} from "./models/role.enum";

const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  { path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN, Role.USER]}
  },

  { path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN]}
  },

  { path: 'detail/:id',
    component: DetailComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN]}
  },//detail/1

  {path: '404', component: NotFoundComponent},
  {path: '401', component: UnauthorizedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['/404']);
    }
  }
}
