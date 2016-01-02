/// <reference path="../typings/tsd.d.ts" />
System.register(['angular2/core', 'angular2/common', 'angular2/router', '../components/TodoList'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, TodoList_1;
    var ReadOnlyPage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (TodoList_1_1) {
                TodoList_1 = TodoList_1_1;
            }],
        execute: function() {
            ReadOnlyPage = (function (_super) {
                __extends(ReadOnlyPage, _super);
                function ReadOnlyPage() {
                    _super.apply(this, arguments);
                }
                ReadOnlyPage = __decorate([
                    core_1.Component({
                        selector: 'read-only-page',
                        directives: [common_1.NgClass, router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'pages/ReadOnlyPage.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ReadOnlyPage);
                return ReadOnlyPage;
            })(TodoList_1.default);
            exports_1("default", ReadOnlyPage);
        }
    }
});
//# sourceMappingURL=ReadOnlyPage.js.map