import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component'; 
import { JokeFormComponent } from './joke-form/joke-form.component';
import { JokelistComponent } from './jokelist/jokelist.component'; 

// decorator called NgModule.. combines all your components. 
@NgModule({
  declarations: [
      //JokeComponent
      AppComponent,
      JokelistComponent,
      JokeComponent,
      JokeFormComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]//[JokeComponent]
})
export class AppModule { }


