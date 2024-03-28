export default class Field {
    constructor(s = '', preserve='') {
        this.value = s;
        this.isConverted = false;
    }
    
    convert() {
        if (!this.isConverted) {
        	console.log('converted');
            this.isConverted = true;
        }
    }
    
    getConverted() {
        if (this.isConverted) {
            return this.value;
        }
    }
}
