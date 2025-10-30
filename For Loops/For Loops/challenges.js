// -----------------------------------------------
// Challenge 1: Count to 10
// Use a for loop to console.log the numbers 1 through 10.

for (let i = 0; i < 10; i++) {
    console.log(i + 1);
}

// -----------------------------------------------
// Challenge 2: Even Numbers Only
// Use a for loop to console.log only even numbers from 2 to 20.

for (let i = 2; i < 22; i += 2) {
    console.log(i)
}

// -----------------------------------------------
// Challenge 3: Count Backwards
// Use a for loop to console.log numbers from 10 down to 1.

for (let i = 10; i>= 1; i--) {
    console.log(i);
}

// -----------------------------------------------
// Challenge 4: Create an array!
// Use a for loop to create an array of numbers, counting from 3 to 7.
// Then, log the array!

let numbers = [];

for (let i = 3; i < 8; i++) {
    numbers.push(i);
}

console.log(numbers);

// -----------------------------------------------
// Challenge 5: A mountain!
// Use a NESTED for loop to write the word "code" once, then twice, then three times.
// (Hint -- can you use the counting variable from the first 
// loop to tell the second one how many times to run?)

for (let i = 0; i < 4; i++) {
    
    let answer = "";
    
    for (let j = 0; j < i + 1; i++) {
        answer += "Code";
    }

    console.log(answer);
}