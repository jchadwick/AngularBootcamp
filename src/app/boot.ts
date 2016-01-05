import {bootstrap}  from 'angular2/platform/browser'
import {ROUTER_PROVIDERS}  from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {TodosService} from '../services/TodosService';
import TodoApp      from './TodoApp';

bootstrap(TodoApp, [ROUTER_PROVIDERS, HTTP_PROVIDERS, TodosService]);