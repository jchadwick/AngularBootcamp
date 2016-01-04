/// <reference path="../typings/tsd.d.ts" />

import {Component, EventEmitter, Output} from 'angular2/core';
import {NgClass, NgModel} from 'angular2/common';
import {Todos} from '../services/TodosService';

@Component({
    selector: 'todo-filters',
    directives: [NgClass, NgModel],
    templateUrl: 'components/TodoFilters.html',
    styles: [`
        .label-as-badge {
            border-radius: 1em;
            padding-right: .7em;
            margin-left: .4em;
        }
    `]
})
export class TodoFilters {

    @Output() filterChanged = new EventEmitter<TodoFilter>();

    filter = { name: '', completed: null };
    
    totalTodoCount = 0;
    completedTodoCount = 0;
    incompleteTodoCount = 0;

    constructor() {
        Todos.subscribe(this._refresh.bind(this));
        this._refresh();
    }

    isCompletedFilter(value) {
        return this.filter.completed === value;
    }
    
    nameChanged() {
        this._triggerFilterChanged();
    }

    setCompletedFilter(value) {
        this.filter.completed = value;
        this._triggerFilterChanged();
    }

    private _findCompletedCount(todos, isCompleted) {
        var filtered = todos.filter(x => x.completed == isCompleted);
        return filtered.length;
    }
    
    private _triggerFilterChanged() {
        console.debug('[TodoFilters] filter: ', this.filter);
        this.filterChanged.emit(JSON.parse(JSON.stringify(this.filter)));
    }

    private _refresh() {
        var todos = Todos.get();
        this.totalTodoCount = todos.length;
        this.completedTodoCount = this._findCompletedCount(todos, true);
        this.incompleteTodoCount = this._findCompletedCount(todos, false);
    }
}