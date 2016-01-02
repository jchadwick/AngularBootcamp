/// <reference path="../typings/tsd.d.ts" />
System.register(['angular2/core', '../components/TodoList', '../components/TodoFilters', '../components/ClearCompletedButton', '../components/AddTodo'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, TodoList_1, TodoFilters_1, ClearCompletedButton_1, AddTodo_1;
    var EditPage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (TodoList_1_1) {
                TodoList_1 = TodoList_1_1;
            },
            function (TodoFilters_1_1) {
                TodoFilters_1 = TodoFilters_1_1;
            },
            function (ClearCompletedButton_1_1) {
                ClearCompletedButton_1 = ClearCompletedButton_1_1;
            },
            function (AddTodo_1_1) {
                AddTodo_1 = AddTodo_1_1;
            }],
        execute: function() {
            EditPage = (function () {
                function EditPage() {
                    this.filter = null;
                }
                EditPage = __decorate([
                    core_1.Component({
                        selector: 'edit-page',
                        directives: [AddTodo_1.AddTodo, TodoList_1.default, TodoFilters_1.TodoFilters, ClearCompletedButton_1.ClearCompletedButton],
                        template: "\n        <div class=\"panel panel-default clearfix\">\n\n            <div class=\"panel-heading clearfix\">\n                <todo-filters (filterChanged)=\"filter = $event\"></todo-filters>\n            </div>\n\n            <div class=\"panel-body\">\n\n                <todo-list [filter]=\"filter\"></todo-list>\n\n                <div class=\"row\">\n\n                    <div class=\"col-xs-12 col-sm-10\">\n                        <add-todo></add-todo>\n                    </div>\n\n                    <div class=\"col-sm-2 hidden-xs\">\n                        <button clear-completed class=\"btn btn-sm btn-warning pull-right\">Clear Completed</button>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], EditPage);
                return EditPage;
            })();
            exports_1("default", EditPage);
        }
    }
});
//# sourceMappingURL=EditPage.js.map