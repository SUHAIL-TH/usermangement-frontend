import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AdminRoutingModule } from './components/admin/admin-routing.module';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './components/admin/state/user/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserEffect } from './components/admin/state/user/user.effects';
import { ProfileComponent } from './components/profile/profile.component';
import { profileReducer } from './state/user.reducer';
import { ProfileEffects } from './state/user.effects';
import { ParentComponent } from './components/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ParentComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({users:userReducer,user:profileReducer}),
    EffectsModule.forRoot([UserEffect,ProfileEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
