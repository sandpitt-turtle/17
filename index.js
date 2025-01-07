// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }
  count() {
    // Return the count of numbers in data
    return this.data.length;
  }

  printNumbers() {
    // Print the numbers in data along with their indexes
    this.data.forEach((num, index) => {
      console.log(`Index: ${index}, Number: ${num}`);
    });
  }

   odds() {
    // Return the odd numbers in data
    return this.data.filter((num) => num % 2 !== 0);
  }

  evens() {
    // Return the even numbers in data
    return this.data.filter((num) => num % 2 === 0);
  }

  sum() {
    // Return the sum of the numbers
    return this.data.reduce((acc, num) => acc + num, 0);
  }

  product() {
    // Return the product of the numbers
    return this.data.reduce((acc, num) => acc * num, 1);
  }

  greaterThan(target) {
    // Return the numbers greater than the target
    return this.data.filter((num) => num > target);
  }

  howMany(target) {
    // Return the count of a given number
//i do not know.
  }
}

//Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");

//create an instance of numbers
const n1 = new Numbers(str);

console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number
