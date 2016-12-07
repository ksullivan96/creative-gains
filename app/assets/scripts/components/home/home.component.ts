import { Component } from '@angular/core';
import {style, animate, transition, state, trigger} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    animations: [
    trigger('fadeInLogo', [
      state('true', style({transform: 'scale(1)', opacity: 1})),
      transition('void => *', [
        style({transform: 'scale(0)', opacity: 0}),
        animate('2.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)')
      ])
    ])
    ]
})
export class HomeComponent { }
