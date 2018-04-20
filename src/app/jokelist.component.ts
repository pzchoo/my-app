import { Component } from '@angular/core';
import { Joke } from './joke.component'; 

@Component({
    selector: 'joke-list',
    template: `
     <joke *ngFor="let j of jokes" [joke]="j"></joke>
    `
})
export class JokeListComponent {
     jokes: Joke[];

    constructor() {
        this.jokes = [
            new Joke('What did the cheese say when it looked in the mirror?','I thought \'That\'s not very mature.\''),
            new Joke('What did the cheese say when it looked in the mirror2222?','Halloumi (hello me)')
        ];
    }
}