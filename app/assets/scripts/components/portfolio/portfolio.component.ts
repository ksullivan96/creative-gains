import { Component, OnInit } from '@angular/core';
import {PortfolioService} from '../../services/portfolio.service';
import {AnimationSlide} from '../../services/animationSlide';

@Component({
    moduleId: module.id,
    selector: 'portfolio',
    templateUrl: 'portfolio.component.html',
    styles: [':host { display: table; width: 100%;height: 100%;min-height: 100%;'],
    host: { '[@routeAnimation]': 'true' },
    animations: AnimationSlide.page
})
export class PortfolioComponent implements OnInit {
    projectList: any;

    constructor(private _portfolioService:PortfolioService){

    } 

    ngOnInit(){
        this._portfolioService.getPortfolio()
            .subscribe( res => {
                this.projectList = res.Portfolio;
            })
    }
}
