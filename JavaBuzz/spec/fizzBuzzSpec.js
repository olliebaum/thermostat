describe('Jaybuzz', function() {
  var jaybuzz;

  beforeEach(function() {
    jaybuzz = new Jaybuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
     expect(jaybuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {

        expect(jaybuzz.isDivisibleByFive(5)).toBe(true);
    });
    it('divisible by 15', function() {

        expect(jaybuzz.isDivisibleByFifteen(15)).toBe(true);
    });


  });

  describe('knows when a number is NOT', function() {

    it('divisible by 3', function() {
      expect(jaybuzz.isDivisibleByThree(4)).toBe(false);
    });

    it('divisible by 5', function() {
      expect(jaybuzz.isDivisibleByFive(6)).toBe(false);
    });
    it('divisible by 15', function() {
      expect(jaybuzz.isDivisibleByFifteen(16)).toBe(false);
    });
  });

  describe('knows whether to output Fizz, Buzz, Fizbuzz or number', function() {

    it('divisible by 15', function() {
      expect(jaybuzz.output(30)).toEqual("FizzBuzz");
    });

    it('divisible by 5', function() {
      expect(jaybuzz.output(10)).toEqual("Buzz");
    });

    it('divisible by 3', function() {
      expect(jaybuzz.output(6)).toEqual("Fizz");
    });
  });
});
