
// !------Inference Of Types In TypeScript------!

// inference of types in TypeScript is a powerful feature that allows the compiler to automatically deduce the types of variables, function return values, and parameters based on the assigned values or usage context. This helps reduce the need for explicit type annotations while still maintaining type safety.

// Examples
let drink = "water";

// Drink is inferred to be of type string because it is initialized with a string value. If you try to assign a number to drink later, TypeScript will throw an error.

// drink = 42;

// Error: Type 'number' is not assignable to type 'string'.

drink = "juice"; // This is valid since drink is of type string.

// Function return type inference
function add(a: number, b: number) {
    return a + b; // The return type is inferred to be number based on the return value.
}

add(5, 10); // Valid

// add("5", "10"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.


// !------- Innotation of types in TypeScript --------!


// Innotation of types in TypeScript is a powerful feature that allows the compiler to automatically deduce the types of variables, function return values, and parameters based on the assigned values or usage context. This helps reduce the need for explicit type annotations while still maintaining type safety.

let age: number = 25; // Explicitly annotating the type of age as number

let isStudent: boolean = true; // Explicitly annotating the type of isStudent as boolean

let name: string = "John"; // Explicitly annotating the type of name as string

let hobbies: string[] = ["reading", "coding", "gaming"]; // Explicitly annotating the type of hobbies as an array of strings

let person: { name: string; age: number } = { name: "Alice", age: 30 }; // Explicitly annotating the type of person as an object with name and age properties

let greetUser: (name: string) => string = (name) => `Hello, ${name}!`; // Explicitly annotating the type of greetUser as a function that takes a string and returns a string

// Function parameter type annotation
function greet(name: string): string {
    return `Hello, ${name}!`; // The return type is explicitly annotated as string.
}

greet("Alice"); // Valid
// greet(123); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.