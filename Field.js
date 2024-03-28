export default class Field {
    constructor(s = '') {
        this.value = s;
        this.isConverted = false;
    }
    
    convert() {
        if (!this.isConverted) {
        
            this.isConverted = true;
        }
    }
    
    getConverted() {
        if (this.isConverted) {
            return this.value;
        }
    }
}
