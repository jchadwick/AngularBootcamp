/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import TodoList from '../components/TodoList';
import {TodosService} from '../services/TodosService';

@Component({
    selector: 'read-only-page',
    directives: [NgClass, ROUTER_DIRECTIVES],
    templateUrl: 'pages/ReadOnlyPage.html'
})
export default class ReadOnlyPage extends TodoList {
    
    constructor(todosService: TodosService) {
        super(todosService);
    }
    
}