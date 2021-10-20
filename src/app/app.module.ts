import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalDateTimePipe } from './shared/pipe/local-date-time.pipe';
import { HomeComponent } from './views/home/home.component';
import { LiveFormDialogComponent } from './views/home/live-form-dialog/live-form-dialog.component';
import { LiveListComponent } from './views/home/live-list/live-list.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LiveListComponent,
    LocalDateTimePipe,
    LiveFormDialogComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    FlexLayoutModule,
    MatChipsModule,
    MatDialogModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatProgressBarModule
  ],
  providers: [
    LocalDateTimePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
