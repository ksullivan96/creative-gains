import {style, animate, transition, state, trigger} from '@angular/core';

export class AnimationUp {
  static page = [
    trigger('routeAnimation', [
      state('*', style({transform: 'translateY(0%)', opacity: 1})),
      transition('void => *', [
        style({transform: 'translateY(100%)', opacity: 0}),
        animate('0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)')
      ]),
      transition('* => void',
        animate('0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)', style({
          transform: 'translateY(100%)',
          opacity: 0
        }))
      )
    ])
  ];
}
