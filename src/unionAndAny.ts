// !------- Union Types -------!

// Union types in TypeScript allow you to define a variable that can hold multiple types. This is useful when a value can be of more than one type, providing flexibility while still maintaining type safety.
let value: string | number = "hello"; // value can be either a string or a number
value = 42; // This is valid

let anotherValue: boolean | null = true; // anotherValue can be either a boolean or null

anotherValue = null; // This is valid

let mixedArray: (string | number)[] = ["text", 10, "more text", 20]; // mixedArray can contain both strings and numbers

// Function with union type parameter
function printValue(val: string | number): void {
    console.log(val);
}

printValue("Hello"); // Valid
printValue(100); // Valid

let unionExample: string | number | boolean = "TypeScript"; // unionExample can be a string, number, or boolean
unionExample = 123;
unionExample = true; // This is valid
// unionExample = null; // Error: Type 'null' is not assignable to type 'string | number | boolean'.

let apiStatus: "success" | "error" | "loading" = "loading"; // apiStatus can only be one of the specified string literals
apiStatus = "success"; // This is valid
// apiStatus = "pending"; // Error: Type '"pending"' is not assignable to type '"success" | "error" | "loading"'.   

let response: { status: "success" | "error"; data?: any } = { status: "success", data: { message: "Data fetched successfully" } }; // response can have a status of either "success" or "error", and optionally include data

let airLine: "Delta" | "United" | "Southwest" = "Delta"; // airline can only be one of the specified string literals

airLine = "Southwest"; // This is valid
// airLine = "American"; // Error: Type '"American"' is not assignable to type '"Delta" | "United" | "Southwest"'.



// ! ------- Any Type -------!

// The any type in TypeScript is a special type that allows a variable to hold values of any type. It effectively turns off type checking for that variable, which can be useful in certain scenarios but should be used with caution as it can lead to runtime errors if not handled properly.
let flexibleValue: any = "I can be anything";
flexibleValue = 42; // This is valid
flexibleValue = true; // This is valid

const orders = ["21", "32", "27", "38"]; // orders is inferred to be of type string[]

// let confirmOrder; // confirmOrder is inferred to be of type any
let confirmOrder : string | undefined; // We can use union type to avoid any type

for (let order of orders) {
    if (order === "32") {
        confirmOrder = order; // confirmOrder is now assigned the string value "32"
        break; // Exit the loop once the order is found
    }
}

console.log(confirmOrder); // Output: "32"

// confirmOrder = 42; // confirmOrder can be reassigned to a number because it is of type any

// console.log(confirmOrder); // Output: 42