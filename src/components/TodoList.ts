/// <reference path="../typings/tsd.d.ts" />

import {Component, EventEmitter, Inject, Input, OnChanges, OnInit} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {TodosService} from '../services/TodosService';

@Component({
    selector: 'todo-list',
    directives: [NgClass],
    styles: [`
        .delete {
            color: red;
            font-size: 120%;
        }
        
        .text-strikethrough {
            text-decoration: line-through;
        }
    `],
    template: `
        <ul class="list-group">
            <li *ngFor="#todo of todos" class="list-group-item">
                <div class="input-lg" [ngClass]="{ 'text-muted': todo.completed }">
                    <input type="checkbox" [(ngModel)]="todo.completed" (change)="toggleCompleted(todo)" />
                    <span [ngClass]="{ 'text-strikethrough': todo.completed }">{{todo.name}}</span>
                    <i *ngIf="todo.completed" (click)="remove(todo)" class="delete glyphicon glyphicon-remove-circle pull-right" title="Remove"></i>
                </div>
            </li>
        </ul>
    `
})
export default class TodoList implements OnChanges, OnInit {

    @Input() filter: TodoFilter;
    todos: Todo[];

    constructor(private todosService: TodosService) {
        this.todosService.subscribe(this._refresh.bind(this));
    }

    ngOnInit() {
        this._refresh();
    }

    ngOnChanges(changes) {
        this._refresh();
    }

    remove(todo: Todo) {
        console.debug('[TodoList] remove(', todo, ')');
        this.todosService.remove(todo);
    }

    toggleCompleted(todo: Todo, isCompleted?: boolean) {
        console.debug('[TodoList] toggleCompleted( todo: ', todo, ', isCompleted:', isCompleted, ')');
        this.todosService.toggleCompleted(todo, isCompleted);
    }

    _refresh() {
        var filter = this.filter;
        console.debug('[TodoList] refreshing todos using filter: ', filter)
        this.todos = this.todosService.get(filter);
    }

}