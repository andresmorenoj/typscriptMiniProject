// const btn = document.getElementById('btn')!; // non-null-expression (!)

// btn.addEventListener('click', () => alert('click'))


let mystery: unknown = "Hello world!!!" 

const numChars = (mystery as string).length // Type Assertions (as)