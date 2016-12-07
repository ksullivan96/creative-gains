"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var portfolio_service_1 = require('../../services/portfolio.service');
var animationSlide_1 = require('../../services/animationSlide');
var PortfolioComponent = (function () {
    function PortfolioComponent(_portfolioService) {
        this._portfolioService = _portfolioService;
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._portfolioService.getPortfolio()
            .subscribe(function (res) {
            _this.projectList = res.Portfolio;
        });
    };
    PortfolioComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'portfolio',
            templateUrl: 'portfolio.component.html',
            styles: [':host { display: table; width: 100%;height: 100%;min-height: 100%;'],
            host: { '[@routeAnimation]': 'true' },
            animations: animationSlide_1.AnimationSlide.page
        }), 
        __metadata('design:paramtypes', [portfolio_service_1.PortfolioService])
    ], PortfolioComponent);
    return PortfolioComponent;
}());
exports.PortfolioComponent = PortfolioComponent;
//# sourceMappingURL=portfolio.component.js.map