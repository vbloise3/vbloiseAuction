System.register(['@angular/core', 'app/components/carousel/carousel', 'app/components/footer/footer', 'app/components/navbar/navbar', 'app/components/product-item/product-item', 'app/components/search/search', 'app/services/product-service'], function(exports_1, context_1) {
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
    var core_1, carousel_1, footer_1, navbar_1, product_item_1, search_1, product_service_1;
    var ApplicationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (carousel_1_1) {
                carousel_1 = carousel_1_1;
            },
            function (footer_1_1) {
                footer_1 = footer_1_1;
            },
            function (navbar_1_1) {
                navbar_1 = navbar_1_1;
            },
            function (product_item_1_1) {
                product_item_1 = product_item_1_1;
            },
            function (search_1_1) {
                search_1 = search_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            }],
        execute: function() {
            // end::imports[]
            // tag::annotation-component[]
            ApplicationComponent = (function () {
                function ApplicationComponent(productService) {
                    this.productService = productService;
                    this.products = []; // <1>
                    this.products = this.productService.getProducts(); // <3>
                }
                ApplicationComponent = __decorate([
                    core_1.Component({
                        selector: 'auction-application',
                        providers: [
                            product_service_1.ProductService // <2>
                        ],
                        templateUrl: 'app/components/application/application.html',
                        styleUrls: ['app/components/application/application.css'],
                        directives: [
                            carousel_1.default,
                            footer_1.default,
                            navbar_1.default,
                            product_item_1.default,
                            search_1.default]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof product_service_1.ProductService !== 'undefined' && product_service_1.ProductService) === 'function' && _a) || Object])
                ], ApplicationComponent);
                return ApplicationComponent;
                var _a;
            }());
            exports_1("default", ApplicationComponent);
        }
    }
});
// end::class[]
//# sourceMappingURL=application.js.map