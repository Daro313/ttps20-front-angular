import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptor } from './helpers/token.interceptor';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FoodtrucksDetailComponent } from './components/foodtrucks-detail/foodtrucks-detail/foodtrucks-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FoodtrucksDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
