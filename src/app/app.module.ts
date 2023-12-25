import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
// import {reducer, reducerTotal} from './food-state/reducers/food.reducer';
import * as fromApp from './-app-state/app-reducer'
import {StoreRouterConnectingModule} from '@ngrx/router-store';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // StoreModule.forRoot({
    //   foodInfo: reducer,
    //   total: reducerTotal
    // })
    StoreModule.forRoot(fromApp.appReducer),
    StoreRouterConnectingModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
