import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {TodosService} from '../services/TodosService';
import DetailsPage from '../pages/DetailsPage';
import EditPage from '../pages/EditPage';
import ReadOnlyPage from '../pages/ReadOnlyPage';

@RouteConfig([
  { path:'/',               name: 'Todos',      component: ReadOnlyPage },
  { path:'/edit',           name: 'Manage',     component: EditPage },
  { path:'/details/:id',    name: 'Details',    component: DetailsPage },
])
@Component({
    selector: 'todo-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <div class="container">
            <div class="header clearfix">
                <h1>AngularJS Todo List</h1>
            </div>
            <div class="row">
                <router-outlet></router-outlet>
            </div>
            
            <div class="row text-small">
                  <a [routerLink]="['Todos']" class="btn btn-small">View</a> 
                | <a [routerLink]="['Manage']" class="btn btn-small">Manage</a>
            </div>
        </div>
    `
})
export default class TodoApp implements OnInit {
    
    constructor(private todosService: TodosService) {
    }

    ngOnInit() {
    }
    
}