
// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//(1)
describe('sayHello', function(){
  it('should be a defined function', function(){
    expect(typeof sayHello).toBe('function')
  });
  it('should return the string "Hello + input" when executed', function(){
    expect(sayHello("Alex")).toBe("Hello, Alex!");
  });
  it('The output value should be a string', function(){
    expect(typeof sayHello()).toBe("string");
  });
  it('The output should not be undefined', function(){
    expect(sayHello()).not.toBe(undefined);
  });
  it("should return true if 5 is entered", function(){
    expect(isFive(5)).toBe(true);
  });
});

//(2)
describe('isFive', function(){
  it('should be a defined function', function(){
    expect(typeof isFive).toBe('function');
  });
  it("Should return a number", function(){
    expect(typeof isFive()).toBe('boolean');
  });
  it("Should return false if a string is entered", function(){
    expect(isFive('string')).toBe(false);
  });
  it('should return a boolean no matter what is the entry ', function(){
    expect(isFive('')).toBe(false);
  });
  it("Should return true if '5' is entered.", function(){
    expect(isFive("5")).toBe(false);
  });
});

//(3)
describe('isEven', function(){
  it('should be a defined function', function(){
    expect(typeof isEven).toBe('function');
  });
  it('The output should be a boolean no matter what is entered.', function(){
    expect(typeof isEven()).toBe('boolean');
  });
  it('should return true if 2 is entered.', function(){
    expect(isEven(2)).toBe(true);
  });
  it('should return false if 3 is entered.', function(){
    expect(isEven(3)).toBe(false);
  });
  it('should return false if infinity is entered', function(){
    expect(isEven(Infinity)).toBe(false);
  });
  it('should return a false if a boolean is entered.', function(){
    expect(isEven('boolean')).toBe(false);
  });
});

//(4)
describe('isVowel', function(){
  it('it should be a defined function', function(){
    expect(typeof isVowel).toBe('function');
  });
  it('Always return a boolean regardless of an entry', function(){
    expect(typeof isVowel()).toBe('boolean');
  });
  it('it return true if "a" is entered', function(){
    expect(isVowel('a')).toBe(true);
  });
  it('it outputs true if "A" is entered', function(){
    expect(isVowel('A')).toBe(true);
  });
  it('should return false if 4 is entered.', function(){
    expect(isVowel(4)).toBe(false);
  });
  it('outputs false if a boolean is entered.', function(){
    expect(isVowel('boolean')).toBe(false);
  });
  it('outputs false if "banana" is entered.', function(){
    expect(isVowel('banana')).toBe(false);
  });
});

//(5)
describe('add', function(){
  it('it should be a defined function', function(){
    expect(typeof isVowel).toBe('function');
  });
  it('It adds if two numbers are entered. Ex: 2, 4', function(){
    expect(add(2, 4)).toBe(6);
  });
  it('it should output NaN if inputs are strings.', function(){
    expect(add('string', 'string')).toBeNaN();
  });
  it('Should return NaN if one number and string is entered.', function(){
    expect(add(2, 'string')).toBeNaN();
  });
  it('Should return NaN when there is no input provided', function(){
    expect(add()).toBeNaN();
  });
});