
// ================================
// JavaScript Array Challenges
// ================================

// -----------------------------------------------

// Challenge 1: Access an Array Item
// Create an array called "fruits" with at least 4 fruit names.
// Log the first item to the console.


let fruits = [
    "apple",
    "banana",
    "orange",
    "grape"
];

console.log(fruits[0]);


// -----------------------------------------------

// Challenge 2: Change an Array Item
// Using the "fruits" array, change the second fruit to something new.
// Log the array to confirm the change.


fruits[1] = "mango";
console.log(fruits[1])


// -----------------------------------------------

// Challenge 3: Add an Item to an Array
// Add a new fruit to the end of the "fruits" array using push().
// Log the array to confirm it was added.


fruits[4] = "lemon";
console.log(fruits);


// -----------------------------------------------

// Challenge 4: 2D Array Access
// Create a 2D array called "matrix" that is 2x2.
// Fill it with numbers of your choice.
// Log the number in the first row, second column.


let matrix = []
matrix[0] = ['36', '76']
matrix[1] = ['95', '25']
console.log(matrix[0][1]);


// -----------------------------------------------

// Challenge 5: Parallel Arrays
// Create two arrays: "names" and "ages".
// Put 3 items in each so that the indices match (example: names[0] is  "Alice", ages[0] is 10).
// Log a sentence using the first index like: "Alice is 10 years old."



let names = ["Kara", "Markus", "Connor"];
let ages = [20, 25, 28];
console.log(names[0] + " is " + ages[0] + " years old.")
console.log(names[1] + " is " + ages[1] + " years old.")
console.log(names[2] + " is " + ages[2] + " years old.")



// -----------------------------------------------

// Challenge 6: Sum All Numbers in a 2D Array
// Create a 2D array called "numbers" with at least 3 rows and 3 columns filled with numbers.
// Use a loop to calculate the sum of all numbers in the array.
// Log the total sum to the console.

let numbers = [
    [10, 20, 30],
    [11, 21, 31],
    [32, 62, 82]
];

let superTotalSum = 0;
for(let i = 0; i < numbers.length; i++) {
    let secondArray = numbers[i];
    let sum = 0;
    for(let j = 0; j < numbers[i].length; j++) {
        sum += secondArray[j];
    }
    superTotalSum += sum;

    console.log(superTotalSum);
}
