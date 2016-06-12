System.register(['@angular/platform-browser-dynamic', 'app/components/application/application'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, application_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (application_1_1) {
                application_1 = application_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(application_1.default);
        }
    }
});
//# sourceMappingURL=main.js.map