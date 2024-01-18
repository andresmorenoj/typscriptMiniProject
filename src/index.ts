const btn = document.getElementById('btn')!; // non-null-expression (!)
const input = document.getElementById('todoInput') as HTMLInputElement;
const form = document.querySelector('form')!;
const list = document.getElementById('todoList')!;

interface ITodo {
	text: string;
	completed: boolean;
}

const readTodos = (): ITodo[]  => {
	const todosDataJSON = localStorage.getItem('todos');
	if(todosDataJSON === null) return []
	return JSON.parse(todosDataJSON);	
}

const saveTodos = () => localStorage.setItem('todos', JSON.stringify(todos))

const createTodo = (todo: ITodo) => {
	const newLi = document.createElement('li');
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.checked = todo.completed;

	checkbox.addEventListener('change', () => {
		todo.completed = checkbox.checked;
		saveTodos()
	})
	
	newLi.append(todo.text);
	newLi.append(checkbox)
	list.append(newLi);
}

const todos: ITodo[] = readTodos()
todos.forEach(createTodo);


const hanldeSubmit = (event: SubmitEvent) => {
	event.preventDefault();
	const newToDo: ITodo = {
		text: input.value,
		completed: false
	};
	createTodo(newToDo)
	todos.push(newToDo)

	saveTodos();
	input.value = ''
}

form.addEventListener('submit', hanldeSubmit)

// (<HTMLInputElement>input).value // Type Assertions

// btn.addEventListener('click', () => {
// 	alert(input.value);
// 	input.value = ''
// })


// let mystery: unknown = "Hello world!!!" 

// const numChars = (mystery as string).length // Type Assertions (as)

