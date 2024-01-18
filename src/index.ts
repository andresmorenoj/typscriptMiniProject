const btn = document.getElementById('btn')!; // non-null-expression (!)
const input = document.getElementById('todoInput') as HTMLInputElement;

// (<HTMLInputElement>input).value // Type Assertions

btn.addEventListener('click', () => {
	alert(input.value);
	input.value = ''
})


// let mystery: unknown = "Hello world!!!" 

// const numChars = (mystery as string).length // Type Assertions (as)

