import title2filename from './title2filename.mjs';
import convertChar from './convertChar.mjs';

title2filename('_', 'Title: Piece\'s Subtitle', ['Hello! MAR-2023', '-']);
[['3', 'C'], [' ', 'n'], ['\'', ' '], ['_', 't']].forEach(el => console.log(convertChar(...el)));
