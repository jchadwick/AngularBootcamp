import {Component, OnInit} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {RouteParams, Router} from 'angular2/router';
import {TodosService} from '../services/TodosService'

@Component({
    selector: 'details-page',
    directives: [NgClass],
    template: `
        <div class="panel panel-default clearfix text-giant">

            <h2>
                <span class="text-muted">(#{{todo.id}})</span>    
                {{todo.name}} 
                <i *ngIf="todo.completed" style="color: lawngreen" class="glyphicon glyphicon-ok"></i>
            </h2>

            <p *ngIf="todo.completedDate">
                <span>Completed on {{todo.completedDate | date}}</span>
            </p>

        </div>
    `
})
export default class DetailsPage implements OnInit {
    
    todo: Todo;
    
    constructor(
        private routeParams: RouteParams,
        private todosService: TodosService
    ){
    }
    
    ngOnInit() {
        var todoId = parseInt(this.routeParams.get('id'));
        this.todosService.getById(todoId).then(todo => this.todo = todo);
    }
}