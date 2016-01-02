/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {NgClass, OnInit} from 'angular2/common';
import {RouteParams, Router} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {Todo} from '../components/model';
import {Todos} from '../components/TodosService'

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
    
    constructor(private routeParams: RouteParams){
    }
    
    ngOnInit() {
        this.todo = Todos.getById(this.routeParams.get('id'));
    }
}