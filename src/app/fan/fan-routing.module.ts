import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { DetailsComponent } from './pages/details/details.component';
import { EditComponent } from './pages/edit/edit.component';
import { FanComponent } from './pages/list/fan.component';
import { FanResolver } from './resolver/FanResolver';

const routes: Routes = [
  {
    path: '',
    component: FanComponent,
    children: [
      {
        path: 'create',
        component: CreateComponent,
      },
    ],
  },
  {
    path: ':id',
    component: DetailsComponent,
    resolve: { fan: FanResolver },
  },
  {
    path: ':id/edit',
    component: EditComponent,
    resolve: { fan: FanResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FanRoutingModule {}
