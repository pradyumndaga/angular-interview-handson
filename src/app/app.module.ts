import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FetchApi } from './fetch.api';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';
import { PipeModule } from '../shared/pipe/pipe.module';
import { DirectiveModule } from '../shared/directive/directive.module';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, FormsModule, ReactiveFormsModule, PipeModule, DirectiveModule ],
  declarations: [ AppComponent, HelloComponent, LoginComponent ],
  providers: [FetchApi],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
