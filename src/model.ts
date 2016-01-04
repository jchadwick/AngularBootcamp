interface Todo {
    id: number;
    name: string;
    completed: boolean;
    completedDate?: Date;
}

interface TodoFilter { 
    name: string; 
    completed: boolean; 
}