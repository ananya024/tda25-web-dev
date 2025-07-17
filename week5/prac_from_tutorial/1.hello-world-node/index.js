
console.log("hello");

const array=[1,2,3,4]
console.log(array, 'array');

setTimeout(()=>{
    console.log('this msg is delayed y 2 sec');
}, 2000)

console.log('this sis last line of sync code, but appears before the one that was delayed');
