import { Component } from '@angular/core';
import { AnimationUp } from '../../services/animationSlideUp';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'contact.component.html',
    styles: [':host { display: table; width: 100%;height: 100%;min-height: 100%; }'],
    host: { '[@routeAnimation]': 'true' },
    animations: AnimationUp.page
})
export class ContactComponent { }
