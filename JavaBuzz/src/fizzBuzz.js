var Jaybuzz = function(){};

Jaybuzz.prototype.isDivisibleByThree = function(number) {
  return (number % 3 === 0);
};

Jaybuzz.prototype.isDivisibleByFive = function(number) {
  return (number % 5 === 0);
};

Jaybuzz.prototype.isDivisibleByFifteen = function(number) {
  return (number % 15 === 0);
};

Jaybuzz.prototype.output = function(number) {
if (this.isDivisibleByFifteen(number)) {
    return "FizzBuzz";
} else if (this.isDivisibleByThree(number)) {
    return "Fizz";
} else if (this.isDivisibleByFive(number)) {
    return "Buzz";
} else {
    return number
}
};
