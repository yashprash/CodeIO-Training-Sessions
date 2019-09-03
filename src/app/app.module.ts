import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Router module imports
import { RouterModule,Routes } from '@angular/router';
//Form modules imports
import { ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
//Http Client Module import
import {HttpClientModule} from '@angular/common/http';
//Angular material import 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//Components import
import { UserFormComponent } from './components/user-form/user-form.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { SendDataService } from './services/send-data.service';



@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    MainContainerComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatListModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  exports: [
    MatInputModule
  ],
  providers: [SendDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
