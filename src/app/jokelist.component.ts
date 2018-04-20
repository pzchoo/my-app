import { Component } from '@angular/core';
import { Joke } from './joke.component'; 
// class Joke {
//     public setup: string;
//     public punchline: string;
//     public hide: boolean;

//     constructor(setup:string, punchline:string){
//         this.setup = setup;
//         this.punchline = punchline;
//         this.hide = true;
//     }

//     toggle() {
//         this.hide = !this.hide;
//     }
// }

@Component({
    selector: 'joke-list',
    template: `
     <joke *ngFor="let j of jokes" [joke]="j"></joke>
    `
    // <div class="card mb-3" *ngFor="let j of jokes" style="width:320px;">
    //     <div class="card-body">
    //          <h4 class ="card-title" >{{j.setup}}</h4>
    //          <p class="card-text" [hidden]="j.hide">{{j.punchline}}</p>
    //          <button class="btn btn-primary" (click)="j.toggle()" role="button">Tell me</button>
    //     </div>
    // </div>
})
export class JokeListComponent {
     jokes: Joke[];

    constructor() {
        this.jokes = [
            new Joke('What did the cheese say when it looked in the mirror?','I thought \'That\'s not very mature.\''),
            new Joke('What did the cheese say when it looked in the mirror2222?','Halloumi')
        ];
    }
}
// export class JokeListComponent{
//     jokes :Object[];

//     constructor() {
//         this.jokes = [
//                         {
//                             setup:"What did the cheese say when it looked in the mirror?", 
//                             punchline:'I thought \'That\'s not very mature.\'',
//                             hide: true,
//                         },
//                         {
//                             setup:"What did the cheese say when it looked in the mirror2222?", 
//                             punchline:'Halloumi',
//                             hide: true,
//                         }
//                     ];
//     }
//     toggle(joke) {
//         joke.hide = !joke.hide;
//     }
// }