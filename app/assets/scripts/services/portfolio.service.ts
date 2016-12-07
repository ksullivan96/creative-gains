import {Injectable, Inject} from '@angular/core';
import {Http, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class PortfolioService{
    private portfolioUrl: string;
    
    constructor(private _http:Http){
        
    }
    getPortfolio(){
            this.portfolioUrl = 'portfolio.json';
            return this._http.get(this.portfolioUrl)
			.map(res => res.json());
        }
}