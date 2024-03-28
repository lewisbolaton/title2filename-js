export default class Field {
    constructor(s = '', k='') {
        this.value = s;
        this.keep = k;
        this.isConverted = false;
    }
    
    convert() {
        if (!this.isConverted) {            
        	for (let i in this.value) {
        	    if (this.value[i] != this.keep) {
        	        console.log('convert char: ' + this.value[i]);
        	    }
        	}
            this.isConverted = true;
        }
    }
    
    getConverted() {
        if (this.isConverted) {
            return this.value;
        }
    }
}
