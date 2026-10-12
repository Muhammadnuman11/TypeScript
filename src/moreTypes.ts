let response: any = "42";

let numaricLength: number = (response as string).length;

type Book = {
    name: string;
}

let bookString = '{"name": "The Great Gatsby"}';

let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject);


const inputElement = document.getElementById("username") as HTMLInputElement;


// Different from 'any', the 'unknown' type is a type-safe counterpart that requires type checking before performing operations on it.

let value: any;

value = "Hello, World!";
value = 42;
value = true;
value = [1, 2, 3]; 

value.upperCase(); // This will cause a runtime error if value is not a string;

let newValue: unknown;

newValue = "Hello, World!";
newValue = 42;
newValue = true;
newValue = [1, 2, 3];

// newValue.upperCase(); // This will cause a compile-time error because 'unknown' type does not have the method 'upperCase'. 

// Solution
if(typeof newValue === "string") {
    newValue.toUpperCase(); // This is safe because we have checked the type
}


let someValue: unknown = "This is a string";

let strData : string = someValue as string;