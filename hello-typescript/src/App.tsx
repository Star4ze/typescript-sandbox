import React from 'react';
import './App.css';

function App() {

  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  console.log(`sum of 123 and 659 is ${add(123, 659)}`);


  //=================================================

  function vowelCount(word: string): number {
    let c: number = 0;
    for (let l of word.toLowerCase()) {
      switch (l) {
        case ('a'):
          c++;
          break;
        case ('e'):
          c++;
          break;
        case ('i'):
          c++;
          break;
        case ('o'):
          c++;
          break;
        case ('u'):
          c++;
          break;
      }
    }
    return c;
  }

  console.log(`number of vowels in 'apple is' ${vowelCount('apple')}`);

  //===========================================================

  function powerOf3(num: number): number {
    return num ** 3;
  }

  console.log(`5 to the power of 3' ${powerOf3(5)}`);

  //===========================================================

  function oddOrEven(num: number): boolean {
    return !(num % 2);
  }

  console.log(`is 5 is even?' ${oddOrEven(5)}`);

  //===========================================================

  function reverseString(word: string): string {
    let reversed: string = '';
    for (let l = word.length; l > 0; l++) {
      reversed += word[l];
    }
    return reversed;
  }

  console.log(`reverse word apple' ${reverseString('apple')}`);

  //===========================================================
  const multinLoops = (num1: number, num2: number): number => {   //does giving a daa type necassary then how?
    let ans: number = 0;
    for (let i = 0; i < num2; i++) {
      ans += num1;
    }
    return ans;
  }

  console.log(`5 * 25 is ' ${multinLoops(25, 5)}`);
  //===========================================================

  function sumofNumbers(nums: number[]): number {
    let sum: number = 0;
    for (let n of nums) {
      sum += n;
    }
    return sum;
  }

  console.log(`sum of 128,256,512 is ' ${sumofNumbers([128, 256, 512])}`);

  //===========================================================

  function sqrt(num: number): number {
    return Math.sqrt(num);
  }

  console.log(`sum of 128,256,512 is ' ${sqrt(16)}`);

  //===========================================================

  function palindrome(word: string): boolean {
    let isPalindrome: boolean = true;
    for (let i = 0; i < word.length / 2; i++) {
      if (word[i] !== word[word.length - i - 1]) {
        isPalindrome = false;
        break;
      }
    }
    return isPalindrome;
  }

  console.log(`is racecar palindrome ' ${palindrome("racecar")}`);

  //===========================================================

  function factorial(num: number): number {
    let ans: number = 1;
    for (let i = 0; i < num; i++) {
      ans *= i
    }
    return ans;
  }

  console.log(`factoraial of 10 is  ' ${factorial(10)}`);

  //===========================================================
  
  console.log("sum ofFibonacci sequence using recursion")
  function fibonacci(num) {
    if (num <= 2)
      return 1
    return fibonacci(num - 2) + fibonacci(num - 1)
  }
  console.log(`sum of Fibonacci sequence until ${num} is ${fibonacci(num)}`)
  console.log()
  //===========================================================
  console.log("factorial of a number using recursion.")
  function factRecurssion(num) {
    if (num <= 1)
      return 1
    return num * factRecurssion(num - 1)
  }
  console.log(`factorial of ${num} is ${factRecurssion(num)}`)
  console.log()
  //===========================================================
  //   Create a function that takes in a number and a function as an argument, then calls the provided function with the result of the number multiplied by 2.

  // Create a function that takes in a number as an argument and returns the number of trailing zeroes in its factorial using recursion.

  // Create a function that takes in a number n as an argument and returns the result of raising it to a power p using recursion.

  // Create a function that takes in a number and a callback function as an argument, then calls the callback function with the result of the number squared, passed through another callback function that takes the result and returns true if the number is even, and false if odd

  // Create a function that takes in a string and a callback function as an argument, then calls the callback function with the result of the string reversed, passed through another callback function that takes the result and returns the number of vowels in the string.
  //===========================================================
  //===========================================================
  //===========================================================

  //===========================================================
  //===========================================================


  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
