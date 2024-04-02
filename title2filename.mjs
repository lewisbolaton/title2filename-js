import Field from './Field.mjs'

export default function title2filename(separator, ...fields) {
    for (let i = 0; i < fields.length; i += 1) {
    	var f;
        if (typeof fields[i] === 'string') {
        	f = new Field(fields[i]);
        	console.log(f.convert());
        } else {
        	f = new Field(fields[i][0]);
        	console.log(f.convert(fields[i][1]));
        }
    }
}
