function findPrimeNumbers(start, end) {
  function isPrime(num) {
    if (num <= 1) 
      return false;

    for (let a = 2; a <= Math.sqrt(num); a++) {
      if (num % a === 0) {
          return false;
      }
    }
      return true;
  }

  const primeNumbers = [];
  for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        primeNumbers.push(i);
  }
  }
  return primeNumbers;
}

console.log(findPrimeNumbers(10, 30)); // Output: [11, 13, 17, 19, 23, 29]
console.log(findPrimeNumbers(1, 10)); // Output: [2, 3, 5, 7]
console.log(findPrimeNumbers(15, 17)); // Output: [17]"  
