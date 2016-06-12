System.register(['@angular/core', 'app/components/stars/stars', 'app/services/product-service'], function(exports_1, context_1) {
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
    var core_1, stars_1, product_service_1;
    var ProductItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (stars_1_1) {
                stars_1 = stars_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            }],
        execute: function() {
            ProductItemComponent = (function () {
                function ProductItemComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', (typeof (_a = typeof product_service_1.Product !== 'undefined' && product_service_1.Product) === 'function' && _a) || Object)
                ], ProductItemComponent.prototype, "product", void 0);
                ProductItemComponent = __decorate([
                    core_1.Component({
                        selector: 'auction-product-item',
                        templateUrl: 'app/components/product-item/product-item.html',
                        directives: [stars_1.default]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductItemComponent);
                return ProductItemComponent;
                var _a;
            }());
            exports_1("default", ProductItemComponent);
        }
    }
});
//# sourceMappingURL=product-item.js.map