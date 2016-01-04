/// <reference path="../typings/tsd.d.ts" />

import {EventEmitter} from 'angular2/core';

export class TodosService extends EventEmitter<string> {

    private __id = 0;

    todos: Todo[] = [];

    constructor() {
        super();
        this._triggerChanged();
    }

    get(filter?: TodoFilter) {

        var params = filter || { name: '', completed: null },
            name = (params.name || '').toLowerCase(),
            completed = params.completed;
            
        var filtered = this.todos.filter(todo =>
               (!name.length || todo.name.toLowerCase().includes(name))
            && (completed === null || todo.completed == completed)
        );

        console.debug('[TodosService] get( filter:', filter, '): ', filtered)

        return filtered;
    }
    
    getById(todoId: number) {
        var todo = this._find(todoId);
        
        console.debug('[TodosService] getById( todoId:', todoId, '): ', todo);
        
        return todo;
    }

    add(name: string) {
        var todo = {
            id: this.__id += 1,
            name: name,
            completed: false
        };

        this.todos.push(todo);

        console.log('Added: ', todo)
        
        this._triggerChanged();
    }

    remove(todo: Todo) {
        this._remove(todo);
        this._triggerChanged();
    }

    clearCompleted() {
        var completed = this.todos.filter(x => x.completed);
        completed.forEach(this._remove.bind(this));
        console.log('Cleared completed tasks')
        this._triggerChanged();
    }

    toggleCompleted(todo: Todo, isComplete?: boolean)
    toggleCompleted(todoId: number, isComplete?: boolean)
    toggleCompleted(query: any, isComplete?: boolean) {
        
        var todoId: number = query;
         
        if(typeof query != 'number') {
            todoId = query.id;
        }
        
        var todo = this._find(todoId);
        
        if(!todo) {
            console.warn('[TodosService] Could not find Todo #', todoId, ' in order to toggle completed');
            return;
        }
        
        todo.completed = (isComplete == null) ? !todo.completed : isComplete;
    
        console.log('[TodosService] Todo #', todoId, 'completed: ', todo.completed);
    }

    private _remove(todo: Todo)
    private _remove(todoId: number)
    private _remove(todo: any) {
        var todoId = todo && todo.id;
        
        if(!todoId && typeof todo == 'number')
        {
            todoId = todo;
        }
        
        var instance = this._find(todoId);
        if(instance) {
            this.todos.splice(this.todos.indexOf(instance), 1);
            console.log('Removed: ', instance)
        }else {
            console.warn('Todo not found: ', todo);
        }
    }

    private _find(todoId: number) {
        var filtered = this.todos.filter(x => x.id == todoId);
        return filtered.length ? filtered[0] : null;
    }

    private _triggerChanged() {
        this.emit('changed');
    }
}