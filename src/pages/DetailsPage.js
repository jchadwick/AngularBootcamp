/// <reference path="../typings/tsd.d.ts" />
System.register(['angular2/core', 'angular2/common', 'angular2/router', '../components/TodosService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, TodosService_1;
    var DetailsPage;
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
            function (TodosService_1_1) {
                TodosService_1 = TodosService_1_1;
            }],
        execute: function() {
            DetailsPage = (function () {
                function DetailsPage(routeParams) {
                    this.routeParams = routeParams;
                }
                DetailsPage.prototype.ngOnInit = function () {
                    this.todo = TodosService_1.Todos.getById(this.routeParams.get('id'));
                };
                DetailsPage = __decorate([
                    core_1.Component({
                        selector: 'details-page',
                        directives: [common_1.NgClass],
                        template: "\n        <div class=\"panel panel-default clearfix text-giant\">\n\n            <h2>\n                <span class=\"text-muted\">(#{{todo.id}})</span>    \n                {{todo.name}} \n                <i *ngIf=\"todo.completed\" style=\"color: lawngreen\" class=\"glyphicon glyphicon-ok\"></i>\n            </h2>\n\n            <p *ngIf=\"todo.completedDate\">\n                <span>Completed on {{todo.completedDate | date}}</span>\n            </p>\n\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams])
                ], DetailsPage);
                return DetailsPage;
            })();
            exports_1("default", DetailsPage);
        }
    }
});
//# sourceMappingURL=DetailsPage.js.map