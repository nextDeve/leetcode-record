class cls {
    constructor() {
        this.flag = true
    };
    func1() {
        console.log(this.flag);
    };
    func2 = () => {
        console.log(this.flag);
    };
};
const son = new cls();
setTimeout(son.func1, 0); setTimeout(son.func2, 0);