class student {
    constructor(){
        console.log('Parent');
    }
}
class regStudent extends student {
    constructor(){
        console.log('regStudent');
       super()

    }
}
class regStudent1 extends regStudent {
constructor(){
console.log('regStudent1');
super();
}
}
const rStu = new regStudent1();