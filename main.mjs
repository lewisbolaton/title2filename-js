import title2filename from './title2filename.mjs';
import convertChar from './convertChar.mjs';

console.log(title2filename('_', 'Juan\'s Document', ['2023-10-21', '-'], '"Hello!" in Multiple Languages'));
[['3', 'C'], [' ', 'n'], ['\'', ' '], ['_', 't']].forEach(el => console.log(convertChar(...el)));
