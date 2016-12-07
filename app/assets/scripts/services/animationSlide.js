"use strict";
var core_1 = require('@angular/core');
var AnimationSlide = (function () {
    function AnimationSlide() {
    }
    AnimationSlide.page = [
        core_1.trigger('routeAnimation', [
            core_1.state('*', core_1.style({ transform: 'translateX(0)', opacity: 1 })),
            core_1.transition('void => *', [
                core_1.style({ transform: 'translateX(-100%)', opacity: 0 }),
                core_1.animate('0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)')
            ]),
            core_1.transition('* => void', core_1.animate('0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)', core_1.style({
                transform: 'translateX(100%)',
                opacity: 0
            })))
        ])
    ];
    return AnimationSlide;
}());
exports.AnimationSlide = AnimationSlide;
//# sourceMappingURL=animationSlide.js.map