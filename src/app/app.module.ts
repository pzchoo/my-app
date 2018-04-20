import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component'; 
import { JokeFormComponent } from './joke-form/joke-form.component';
import { JokelistComponent } from './jokelist/jokelist.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; 

const appRoutes:Routes = [
  {path:'', component: HomeComponent},
  {path:'jokes', component:JokelistComponent },
  {path:'joke-list', redirectTo:'jokes'  }, 
  {path:'**', component: PageNotFoundComponent },
];

// decorator called NgModule.. combines all your components. 
@NgModule({
  declarations: [
      //JokeComponent
      AppComponent,
      JokelistComponent,
      JokeComponent,
      JokeFormComponent,
      HomeComponent,
      PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]//[JokeComponent]
})
export class AppModule { }


