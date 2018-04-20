import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke/joke.component'; 

@Component({
  selector: 'app-jokelist',
  templateUrl: './jokelist.component.html',
  styleUrls: ['./jokelist.component.css']
})
export class JokelistComponent implements OnInit {

  jokes: Joke[];

  constructor() {
      this.jokes = [
          new Joke('What did the cheese say when it looked in the mirror?','I thought \'That\'s not very mature.\''),
          new Joke('What did the cheese say when it looked in the mirror2222?','Halloumi (hello me)')
      ];
  }

  ngOnInit() {
  }

}
