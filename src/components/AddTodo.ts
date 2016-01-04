/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {NgClass, NgModel, NgIf, NgForm} from 'angular2/common';
import {Todos} from '../services/TodosService';

@Component({
    selector: 'add-todo',
    directives: [NgClass, NgModel, NgIf, NgForm],
    templateUrl: 'components/AddTodo.html'
})
export class AddTodo {
    
    name = '';
    
    add() {
        Todos.add(this.name);
        this.name = '';
    }
}