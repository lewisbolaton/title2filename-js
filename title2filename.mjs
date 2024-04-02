import Field from './Field.mjs'

export default function title2filename(separator, ...fields) {
  var fieldStrings = [];

  for (let i = 0; i < fields.length; i += 1) {
	  var f;
    if (typeof fields[i] === 'string') {
    	f = new Field(fields[i]);
    	fieldStrings.push(f.convert());
    } else {
    	f = new Field(fields[i][0]);
    	fieldStrings.push(f.convert(fields[i][1]));
    }
  }
  
  return fieldStrings.join(separator);
}
