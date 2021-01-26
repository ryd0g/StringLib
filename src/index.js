function capitalize(str) {
  console.log('---capitalize---');
  // takes first index of the string, capitalizes, and combines with the rest of the string
  return str[0].toUpperCase() + str.slice(1);
}

function allCaps(str) {
  console.log('---allCaps---');
  // capitalized every character of the string
  return str.toUpperCase();
}

function capitalizeWords(str) {
  console.log('---capitalizeWords---');
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

function removeExtraSpaces(str) {
  console.log('---removeExtraSpaces---');
  // trimming the extra spaces off the string
  const trimmed = str.trim();
  // splitting the trimmed string into an array
  const chars = trimmed.split(' ');
  // filtering the array of empty spaces and joining
  const spaces = chars.filter((c) => c !== '');
  return spaces.join(' ');
}

// second parameter for separating the string words
function kebabCase(str, sep = '-') {
  console.log('---kebabCase---');
  // made variable to split the string
  const words = str.split(' ');
  // joins the string with a '-' in between
  return words.join(sep);
}

function snakeCase(str) {
  console.log('---snakeCase---');
  // calling the kebab case function and replacing the sep parameter with an '_'
  return kebabCase(str, '_');
}

function camelCase(str) {
  console.log('---camelCase---');
  // all words in upper case
  const upper = capitalizeWords(str);
  // array of words split at space
  const space = upper.split(' ');
  space[0] = space[0].toLowerCase();
  // connects string to form one word
  const result = space.join('');
  return result;
}

function shift(str) {
  console.log('---shift---');
  // getting our first character in the string
  const first = str[0];
  // slicing the rest of the string from the first character
  const split = str.slice(1);
  // combining the split part of the string with the first character at the end
  const result = split + first;
  return result;
}

function makeHashTag(str) {
  console.log('---makeHashTag---');
  // capitalizing each word of the string and splitting it into an array
  const capital = capitalizeWords(str).split(' ');
  // joining the string with no spaces
  const result = capital.join('');
  // combining a '#' and the string as one
  return '#' + result;
}

function isEmpty(str) {
  console.log('---isEmpty---');
  const trimmed = str.trim();
  if (trimmed === '') {
    return true;
  } else {
    return false;
  }
}
