/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import TodoList from '../components/TodoList';
import {TodoFilters} from '../components/TodoFilters';
import {ClearCompletedButton} from '../components/ClearCompletedButton';
import {AddTodo} from '../components/AddTodo';

@Component({
    selector: 'edit-page',
    directives: [AddTodo, TodoList, TodoFilters, ClearCompletedButton],
    template: `
        <div class="panel panel-default clearfix">

            <div class="panel-heading clearfix">
                <todo-filters (filterChanged)="filter = $event"></todo-filters>
            </div>

            <div class="panel-body">

                <todo-list [filter]="filter"></todo-list>

                <div class="row">

                    <div class="col-xs-12 col-sm-10">
                        <add-todo></add-todo>
                    </div>

                    <div class="col-sm-2 hidden-xs">
                        <button clear-completed class="btn btn-sm btn-warning pull-right">Clear Completed</button>
                    </div>

                </div>
            </div>
        </div>
    `
})
export default class EditPage {
    
    filter: TodoFilter = null; 
    
}