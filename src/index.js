import {compose, pipe} from 'lodash/fp';
const user = require('./objects')


let input = "  Javascript  ";
const trim = str => str.trim();
const toLowerCase = str => str.toLowerCase();
//const wrapInDiv = str =>    `<div>${str}</div>`
//const wrapInSpan = str =>    `<span>${str}</span>`
const wrap = type => str => `<${type}>${str}</${type}>`;

const transform = pipe(trim, toLowerCase, wrap("span"));
console.log(transform(input));

console.log(user.userUpdated);
console.log(user.user);



//console.log(wrapInDiv(toLowerCase(trim(input)))); //this is called compositional function