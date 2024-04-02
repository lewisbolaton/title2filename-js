import convertChar from './convertChar.mjs';

export default class Field {
    constructor(s) {
        this.value = s.split('');
    }
    
    convert(k = '') {
        var converted = [];
    
        let shifted = [...this.value];
        shifted.pop();
        shifted.unshift('\0');
                
    	for (let i in this.value) {
    	    if (k.includes(this.value[i])) {
    	        converted.push(convertChar(this.value[i], shifted[i]));
    	    } else {
    	        converted.push(this.value[i]);
    	    }
    	}
    	
    	return converted.join('');
    }
}
