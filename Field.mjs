import convertChar from './convertChar.mjs';

export default class Field {
    constructor(s='', k='') {
        this.value = s.split('');
        this.keep = k;
        this.isConverted = false;
    }
    
    convert() {
        if (!this.isConverted) {
            let shifted = [...this.value];
            shifted.pop();
            shifted.unshift('\0');
                    
        	for (let i in this.value) {
        	    if (this.value[i] != this.keep) {
        	        this.value[i] = convertChar(this.value[i], shifted[i]);
        	    }
        	}
            this.isConverted = true;
        }
    }
    
    getConverted() {
        if (this.isConverted) {
            return this.value.join();
        }
    }
}
