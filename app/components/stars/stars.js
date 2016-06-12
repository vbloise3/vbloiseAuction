System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var StarsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StarsComponent = (function () {
                function StarsComponent() {
                    this.count = 5; // <1>
                    this.rating = 0; // <2>
                    this.stars = []; // <3>
                }
                StarsComponent.prototype.ngOnInit = function () {
                    for (var i = 1; i <= this.count; i++) {
                        this.stars.push(i > this.rating);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], StarsComponent.prototype, "count", void 0);
                __decorate([
                    // <1>
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], StarsComponent.prototype, "rating", void 0);
                StarsComponent = __decorate([
                    // <1>
                    core_1.Component({
                        templateUrl: 'app/components/stars/stars.html',
                        styles: [" .starrating { color: #d17581; }"],
                        selector: 'auction-stars'
                    }), 
                    __metadata('design:paramtypes', [])
                ], StarsComponent);
                return StarsComponent;
            }());
            exports_1("default", StarsComponent);
        }
    }
});
//# sourceMappingURL=stars.js.map