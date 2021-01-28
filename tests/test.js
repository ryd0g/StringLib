const lib = require('../src/index');

test('capitalize first character', () => {
  expect(lib.capitalize('hello')).toBe('Hello');
  expect(lib.capitalize('Hello')).toBe('Hello');
  expect(lib.capitalize('hello world')).toBe('Hello world');
});

test('outputs string in all caps', () => {
  expect(lib.allCaps('hello')).toBe('HELLO');
  expect(lib.allCaps('hello world')).toBe('HELLO WORLD');
  expect(lib.allCaps('')).toBe('');
  expect(lib.allCaps('hello!')).toBe('HELLO!');
});

test('capitalizes the first character of every word', () => {
  expect(lib.capitalizeWords('hello world')).toBe('Hello World');
  expect(lib.capitalizeWords('hello')).toBe('Hello');
  expect(lib.capitalizeWords('Hello World')).toBe('Hello World');
});

test('removes extra spaces in the string', () => {
  expect(lib.removeExtraSpaces('   hello')).toBe('hello');
  expect(lib.removeExtraSpaces('  hello world    ')).toBe('hello world');
});

test('converts string to kebab case typing', () => {
  expect(lib.kebabCase('hello world')).toBe('hello-world');
  expect(lib.kebabCase('hello')).toBe('hello');
  expect(lib.kebabCase('hello to the world')).toBe('hello-to-the-world');
});

test('converts string to snake case typing', () => {
  expect(lib.snakeCase('hello world')).toBe('hello_world');
  expect(lib.snakeCase('hello')).toBe('hello');
  expect(lib.snakeCase('hello this test')).toBe('hello_this_test');
});

test('converts string to camel case typing', () => {
  expect(lib.camelCase('hello world')).toBe('helloWorld');
  expect(lib.camelCase('hello')).toBe('hello');
  expect(lib.camelCase('hello this test')).toBe('helloThisTest');
});

test('shifts the first character to the end of the string', () => {
  expect(lib.shift('hello')).toBe('elloh');
  expect(lib.shift('hello world')).toBe('ello worldh');
});

test('converts the string to a twitter hashtag format', () => {
  expect(lib.makeHashTag('hello')).toBe('#Hello');
  expect(lib.makeHashTag('hello world')).toBe('#HelloWorld');
});

test('returns true if the string is empty', () => {
  expect(lib.isEmpty('hello')).toBe(false);
  expect(lib.isEmpty('')).toBe(true);
});
