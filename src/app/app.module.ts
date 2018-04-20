import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JokeComponent } from './joke.component'; 
import { JokeListComponent } from './jokelist.component'; 

// decorator called NgModule.. combines all your components. 
@NgModule({
  declarations: [
      //JokeComponent
      AppComponent,
      JokeListComponent,
      JokeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]//[JokeComponent]
})
export class AppModule { }


