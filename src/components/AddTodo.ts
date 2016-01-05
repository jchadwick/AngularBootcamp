import {Component} from 'angular2/core';
import {NgClass, NgModel, NgIf, NgForm} from 'angular2/common';
import {TodosService} from '../services/TodosService';

@Component({
    selector: 'add-todo',
    directives: [NgClass, NgModel, NgIf, NgForm],
    templateUrl: 'components/AddTodo.html'
})
export class AddTodo {

    name = '';

    constructor(private todosService: TodosService) {
    }
    
    add() {
        this.todosService.add(this.name);
        this.name = '';
    }
}