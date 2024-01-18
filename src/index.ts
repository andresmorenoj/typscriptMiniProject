const btn = document.getElementById('btn')!; // non-null-expression (!)
const input = document.getElementById('todoInput') as HTMLInputElement;
const form = document.querySelector('form')!;
const list = document.getElementById('todoList')!;

const hanldeSubmit = (event: SubmitEvent) => {
	event.preventDefault();
	const newToDo = input.value;
	const newLi = document.createElement('li');
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	
	newLi.append(newToDo);
	newLi.append(checkbox)
	list.append(newLi);

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

