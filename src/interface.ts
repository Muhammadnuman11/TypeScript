// Interface in TypeScript is a way to define the shape of an object, specifying the properties and their types that an object should have. It allows for type-checking and ensures that objects adhere to a specific structure. Interfaces can also be used to define contracts for classes, ensuring that they implement certain methods and properties.

let user: { name: string; age: number; } = {
    name: "John Doe",
    age: 30
};

// readonly name: string; // The 'readonly' modifier indicates that the property cannot be reassigned after its initial value is set. It provides immutability to the property, preventing accidental modifications.

interface User {
   readonly name: string;
    age?: number;
}

let user1: User = {
    name: "Jane Doe",
};      

let user2: User = {
    name: "Alice Smith",
    age: 28
};  

// Void is a special type in TypeScript that represents the absence of a value or the lack of a return value from a function. It is often used as the return type for functions that do not return anything. When a function is declared with a void return type, it indicates that the function does not produce any meaningful result and is primarily used for its side effects, such as performing an action or modifying state.   

function printUserInfo(user: User): void {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}   

// literal type in TypeScript allows you to define a type that can only have a specific set of values. It is often used to create a union of string or numeric literals, providing a way to restrict the possible values that a variable can take. Literal types are useful for creating more precise and constrained types, enhancing type safety and preventing unintended values from being assigned.

// Example of a literal type for a string:
type Direction = "up" | "down" | "left" | "right";

// Difference between type and interface in TypeScript:

// 1. Declaration: Interfaces are declared using the 'interface' keyword, while types are declared using the 'type' keyword.
// 2. Extensibility: Interfaces can be extended using the 'extends' keyword, allowing for inheritance and composition. Types cannot be extended in the same way.
// 3. Merging: Interfaces can be merged, meaning that multiple declarations of the same interface will be combined into a single interface. Types cannot be merged in this way.
// 4. Use Cases: Interfaces are typically used to define the shape of objects and classes, while types are more versatile and can represent a wider range of constructs, including unions, intersections, and primitive types.

// Examples of interface and type usage:

// Using an interface to define the shape of an object
interface Person {
    name: string;
    age: number;
}

type Employee = {
    name: string;
    age: number;
    position: string;
};