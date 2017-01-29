import { trigger,state,style,transition,animate } from '@angular/core';

export const animation1 = trigger('countryState', [state('inactive', style({background: '#eee',
 transform: 'scale(1)'
     })),
     state('active', style({
         transform: 'scale(1.2)',
         background: '#052433'
     })),
     transition('inactive => active', animate('500ms ease-in')),
     transition('active => inactive', animate('500ms ease-out'))
 ]);