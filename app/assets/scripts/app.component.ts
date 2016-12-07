import { Component } from '@angular/core';
import {PortfolioService} from './services/portfolio.service';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [PortfolioService]
})
export class AppComponent {
    constructor() {

    }

 }
