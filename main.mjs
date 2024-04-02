import title2filename from './title2filename.mjs';
import convertChar from './convertChar.mjs';

title2filename('_', 'Hello', ['Hello', 'world']);
[['3', 'C'], [' ', 'n'], ['\'', ' '], ['_', 't']].forEach(el => console.log(convertChar(...el)));
