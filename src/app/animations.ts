import { trigger, transition, style, animateChild, animate, query, group } from '@angular/animations';


export const fadeAnimation =
  trigger('routeAnimations', [
    transition('* <=> profile', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ opacity: 0 })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('150ms', style({ opacity: 0}))
        ]),
        query(':enter', [
          animate('150ms', style({ opacity: 1}))
        ])
      ]),
      query(':enter', animateChild()),
    ])

  ]);
