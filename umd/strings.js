(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global['string-lib'] = factory());
}(this, (function () { 'use strict';

  function capitalize(str) {
      console.log('---capitalize---');
      // takes first index of the string, capitalizes, and combines with the rest of the string
      return str[0].toUpperCase() + str.slice(1);
  }
  String.prototype.capitalize = function () {
      return capitalize(this);
  };
  function allCaps(str) {
      // capitalized every character of the string
      return str.toUpperCase();
  }
  String.prototype.allCaps = function () {
      return allCaps(this);
  };
  function capitalizeWords(str) {
      console.log('---capitalizeWords---');
      // calling the function to capitalize the first letter
      capitalize(str);
      // splitting the string into an array
      str.split(' ');
      // creating a variable to capitalize the first letter of every word
      var result = str.split(' ').map(function (word) {
          return capitalize(word);
      });
      return result.join(' ');
  }
  String.prototype.capitalizeWords = function () {
      return capitalizeWords(this);
  };
  function removeExtraSpaces(str) {
      console.log('---removeExtraSpaces---');
      // trimming the extra spaces off the string
      var trimmed = str.trim();
      // splitting the trimmed string into an array
      var chars = trimmed.split(' ');
      // filtering the array of empty spaces and joining
      var spaces = chars.filter(function (c) { return c !== ''; });
      return spaces.join(' ');
  }
  String.prototype.removeExtraSpaces = function () {
      return removeExtraSpaces(this);
  };
  // second parameter for separating the string words
  function kebabCase(str, sep) {
      if (sep === void 0) { sep = '-'; }
      console.log('---kebabCase---');
      // made variable to split the string
      var words = str.split(' ');
      // joins the string with a '-' in between
      return words.join(sep);
  }
  String.prototype.kebabCase = function () {
      return kebabCase(this);
  };
  function snakeCase(str) {
      console.log('---snakeCase---');
      // calling the kebab case function and replacing the sep parameter with an '_'
      return kebabCase(str, '_');
  }
  String.prototype.snakeCase = function () {
      return kebabCase(this);
  };
  function camelCase(str) {
      console.log('---camelCase---');
      // all words in upper case
      var upper = capitalizeWords(str);
      // array of words split at space
      var space = upper.split(' ');
      space[0] = space[0].toLowerCase();
      // connects string to form one word
      var result = space.join('');
      return result;
  }
  String.prototype.camelCase = function () {
      return camelCase(this);
  };
  function shift(str) {
      console.log('---shift---');
      // getting our first character in the string
      var first = str[0];
      // slicing the rest of the string from the first character
      var split = str.slice(1);
      // combining the split part of the string with the first character at the end
      var result = split + first;
      return result;
  }
  String.prototype.shift = function () {
      return shift(this);
  };
  function makeHashTag(str) {
      console.log('---makeHashTag---');
      // capitalizing each word of the string and splitting it into an array
      var capital = capitalizeWords(str).split(' ');
      // joining the string with no spaces
      var result = capital.join('');
      // combining a '#' and the string as one
      return '#' + result;
  }
  String.prototype.makeHashTag = function () {
      return makeHashTag(this);
  };
  function isEmpty(str) {
      console.log('---isEmpty---');
      var trimmed = str.trim();
      if (trimmed === '') {
          return true;
      }
      else {
          return false;
      }
  }
  String.prototype.isEmpty = function () {
      return isEmpty(this);
  };
  var index = {
      capitalize: capitalize,
      allCaps: allCaps,
      capitalizeWords: capitalizeWords,
      removeExtraSpaces: removeExtraSpaces,
      kebabCase: kebabCase,
      snakeCase: snakeCase,
      camelCase: camelCase,
      shift: shift,
      makeHashTag: makeHashTag,
      isEmpty: isEmpty,
  };

  return index;

})));
