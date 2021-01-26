console.log('---capitalize---');
function capitalize(str) {
  // takes first index of the string, capitalizes, and combines with the rest of the string
  return str[0].toUpperCase() + str.slice(1);
}

console.log('---allCaps---');
function allCaps(str) {
  // capitalized every character of the string
  return str.toUpperCase();
}

console.log('---capitalizeWords---');
function capitalizeWords(str) {
  // calling the function to capitalize the first letter
  capitalize(str);
  // splitting the string into an array
  str.split(' ');
  // creating a variable to capitalize the first letter of every word
  let result = str.split(' ').map(function (word) {
    return capitalize(word);
  });
  return result.join(' ');
}

console.log('---removeExtraSpaces---');
function removeExtraSpaces(str) {
  // trimming the extra spaces off the string
  const trimmed = str.trim();
  // splitting the trimmed string into an array
  const chars = trimmed.split(' ');
  // filtering the array of empty spaces and joining
  const spaces = chars.filter((c) => c !== '');
  return spaces.join(' ');
}

console.log('---kebabCase---');
// second parameter for separating the string words
function kebabCase(str, sep = '-') {
  // made variable to split the string
  const words = str.split(' ');
  // joins the string with a '-' in between
  return words.join(sep);
}

console.log('---snakeCase---');
function snakeCase(str) {
  // calling the kebab case function and replacing the sep parameter with an '_'
  return kebabCase(str, '_');
}

console.log('---camelCase---');
function camelCase(str) {
  // all words in upper case
  const upper = capitalizeWords(str);
  // array of words split at space
  const space = upper.split(' ');
  space[0] = space[0].toLowerCase();
  // connects string to form one word
  const result = space.join('');
  return result;
}

console.log('---shift---');
function shift(str) {
  // getting our first character in the string
  const first = str[0];
  // slicing the rest of the string from the first character
  const split = str.slice(1);
  // combining the split part of the string with the first character at the end
  const result = split + first;
  return result;
}

console.log('---makeHashTag---');
function makeHashTag(str) {
  // capitalizing each word of the string and splitting it into an array
  const capital = capitalizeWords(str).split(' ');
  // joining the string with no spaces
  const result = capital.join('');
  // combining a '#' and the string as one
  return '#' + result;
}

console.log('---isEmpty---');
function isEmpty(str) {
  const trimmed = str.trim();
  if (trimmed === '') {
    return true;
  } else {
    return false;
  }
}
