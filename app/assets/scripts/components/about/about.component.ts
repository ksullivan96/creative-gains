import { Component } from '@angular/core';
import {AnimationSlide} from '../../services/animationSlide';
@Component({
    moduleId: module.id,
    selector: 'about',
    templateUrl: 'about.component.html',
    styles: [':host { display: table; width: 100%;height: 100%;min-height: 100%;'],
    host: { '[@routeAnimation]': 'true' },
    animations: AnimationSlide.page

})
export class AboutComponent { }
