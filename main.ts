//DAY 32
//TASK 1 (Use the .map method) to creating new array that contains length of each word from an array of words
//Defining array with some words 
let words: string[] = ["Dubai","Canada","Happiest","Travelling","Typescript"];
//using .map() to create a new array with the length of each word
let lengths: number[]=words.map(word => word.length);
console.log(lengths); //Result [5,6,8,10,10]
//it shows the length of each word

//TASK 2 (Using function of .filter) using this method to return an array of numbers greater than 10
function filtersGreaterThanTen(numbers: number[]): number[]{
    return numbers.filter(number => number > 10);
}
//Example: Filtering an array of numbers
const numbers: number[] = [2,4,6,8,10,12,14,16,18,20,22,24,30,32];
console.log(filtersGreaterThanTen(numbers)); //Result it is printed all no greater than 10 not less than

//TASK 3 (Demonstrate how to use the .reduce) using .reduce method to sum of all num in an array
function calculatesum (numbers: number[]) : number {
    return numbers.reduce((accumulator, current) => accumulator + current ,0);
}
//Example: Calculating the sum of an array of numbers
let digits:  number [] = [2,6,9,14,55,78,90]; //Result 254 
console.log(calculatesum(digits)); 