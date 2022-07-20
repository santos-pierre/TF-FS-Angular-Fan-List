import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './fan/create/create.component';
import { DetailsComponent } from './fan/details/details.component';
import { EditComponent } from './fan/edit/edit.component';
import { FanComponent } from './fan/fan.component';
import { FanResolver } from './fan/resolver/FanResolver';

const routes: Routes = [
  {
    path: 'fans',
    component: FanComponent,
    children: [
      {
        path: 'create',
        component: CreateComponent,
      },
    ],
  },
  {
    path: 'fans/:id',
    component: DetailsComponent,
    resolve: { fan: FanResolver },
  },
  {
    path: 'fans/:id/edit',
    component: EditComponent,
    resolve: { fan: FanResolver },
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'fans',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
