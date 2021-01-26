![GitHub top language](https://img.shields.io/github/languages/top/ryd0g/StringLib)
![npm bundle size](https://img.shields.io/bundlephobia/min/ryan-lee-stringlib?color=purple)
![npm](https://img.shields.io/npm/v/ryan-lee-stringlib?color=green)
![GitHub last commit](https://img.shields.io/github/last-commit/ryd0g/StringLib?color=orange)

String Library
Author: Ryan Lee

This is a small library to help manage strings in JavaScript

How to install:

1. Open terminal
2. Navigate to your project directory
3. Run 'npm i ryan-lee-stringlib' in the command line

Code Sample:

function capitalize(str) {
console.log('---capitalize---');
return str[0].toUpperCase() + str.slice(1);
}
console.log(calitalize('hello world'))
Outputs: 'Hello world'
