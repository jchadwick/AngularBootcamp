import {Directive, ElementRef} from 'angular2/core';
import {TodosService} from '../services/TodosService';

@Directive({
    selector: '[clear-completed]',
    host: {
        '(click)': 'clearCompleted()'
    }
})
export class ClearCompletedButton {
    
    constructor(private todosService: TodosService) {
    }

    clearCompleted() {
        this.todosService.clearCompleted();
    }
    
}