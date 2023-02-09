import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FanRoutingModule } from './fan-routing.module';
import { FanComponent } from './pages/list/fan.component';
import { EditComponent } from './pages/edit/edit.component';
import { CreateComponent } from './pages/create/create.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [
    FanComponent,
    EditComponent,
    CreateComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    FanRoutingModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatDatepickerModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
})
export class FanModule {}
