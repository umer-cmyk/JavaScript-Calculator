// Simple unit tests for calculator functions

// Test 1: Addition function
function add(num1, num2) {
  return num1 + num2;
}

test('adds 5 + 3 to equal 8', () => {
  expect(add(5, 3)).toBe(8);
});

// Test 2: BMI calculation function
function calculateBMI(weight, height) {
  return weight / (height * height);
}

test('calculates BMI correctly for weight 70kg and height 1.75m', () => {
  const bmi = calculateBMI(70, 1.75);
  expect(bmi).toBeCloseTo(22.86, 2);
});
