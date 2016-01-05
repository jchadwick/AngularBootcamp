import {EventEmitter, Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TodosService extends EventEmitter<string> {

    private __id = 0;

    private loading: Promise<Todo[]>;
    todos: Todo[] = [];

    constructor(private http: Http) {
        super();
        console.log('http: ', http)
    }

    get(filter?: TodoFilter) {
        return this._load().then(() => {
            var params = filter || { name: '', completed: null },
                name = (params.name || '').toLowerCase(),
                completed = params.completed;

            var filtered = this.todos.filter(todo =>
                (!name.length || todo.name.toLowerCase().includes(name))
                && (completed === null || todo.completed == completed)
            );

            console.debug('[TodosService] get( filter:', filter, '): ', filtered)

            return filtered;
        });
    }

    getById(todoId: number) {
        return this._load().then(() => {
            var todo = this._find(todoId);
            console.debug('[TodosService] getById( todoId:', todoId, '): ', todo);
            return todo;
        });
    }

    add(name: string) {
        var todo = {
            id: this.__id += 1,
            name: name,
            completed: false
        };

        return this._load().then(() => {
            this.todos.push(todo);
            console.log('Added: ', todo)
            this._triggerChanged();
        });
    }

    remove(todo: Todo) {
        return this._load().then(() => {
            this._remove(todo);
            this._triggerChanged();
        });
    }

    clearCompleted() {
        return this._load().then(() => {
            var completed = this.todos.filter(x => x.completed);
            completed.forEach(this._remove.bind(this));
            console.log('Cleared completed tasks')
            this._triggerChanged();
        })
    }

    toggleCompleted(todo: Todo, isComplete?: boolean)
    toggleCompleted(todoId: number, isComplete?: boolean)
    toggleCompleted(query: any, isComplete?: boolean) {

        var todoId: number = query;

        if (typeof query != 'number') {
            todoId = query.id;
        }

        return this._load().then(() => {
            var todo = this._find(todoId);

            if (!todo) {
                console.warn('[TodosService] Could not find Todo #', todoId, ' in order to toggle completed');
                return;
            }

            todo.completed = (isComplete == null) ? !todo.completed : isComplete;

            console.log('[TodosService] Todo #', todoId, 'completed: ', todo.completed);

            this._triggerChanged();
        });
    }

    private _remove(todo: Todo)
    private _remove(todoId: number)
    private _remove(todo: any) {
        var todoId = todo && todo.id;

        if (!todoId && typeof todo == 'number') {
            todoId = todo;
        }

        var instance = this._find(todoId);
        if (instance) {
            this.todos.splice(this.todos.indexOf(instance), 1);
            console.log('Removed: ', instance)
        } else {
            console.warn('Todo not found: ', todo);
        }
    }

    private _find(todoId: number) {
        var filtered = this.todos.filter(x => x.id == todoId);
        return filtered.length ? filtered[0] : null;
    }

    private _load() {
        if (!this.loading) {
            this.loading = new Promise(
                (resolve) => this.http.get('services/todos.json').subscribe(
                    res => {
                        this.todos = res.json();
                        console.log('loaded todos from server', this.todos);
                        var ids = [0].concat(this.todos.map(x => x.id));
                        this.__id = Math.max(...ids);
                        resolve(this.todos);
                    })
            );
        }

        return this.loading;
    }

    private _triggerChanged() {
        this.emit('changed');
    }
}