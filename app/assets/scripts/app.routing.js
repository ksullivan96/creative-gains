"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./components/home/home.component');
var portfolio_component_1 = require('./components/portfolio/portfolio.component');
var about_component_1 = require('./components/about/about.component');
var contact_component_1 = require('./components/contact/contact.component');
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'portfolio',
        component: portfolio_component_1.PortfolioComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map