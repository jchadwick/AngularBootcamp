import {Directive, ElementRef} from 'angular2/core';
import {Todos} from './TodosService';

@Directive({
    selector: '[clear-completed]',
    host: {
        '(click)': 'clearCompleted()'
    }
})
export class ClearCompletedButton {
    
    clearCompleted() {
        Todos.clearCompleted();
    }
    
}