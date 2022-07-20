import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { FanComponent } from './fan/fan.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './fan/details/details.component';
import { CreateComponent } from './fan/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './fan/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FanComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    DetailsComponent,
    CreateComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
