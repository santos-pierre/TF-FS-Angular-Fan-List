import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'fans',
  },
  {
    path: 'fans',
    component: LayoutComponent,
    loadChildren: () => import('./fan/fan.module').then((m) => m.FanModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
