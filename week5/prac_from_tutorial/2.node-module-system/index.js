
//module.exports -> exports
//require - import

const firstModule = require('./first-module')

console.log(firstModule.add(2,4));
try{
    console.log(firstModule.div(6,10));
    console.log(firstModule.div(6,0));
    console.log('not shown inf error caught b4 it, else shown');
}
catch(error){
    console.log('caught', error.message);
}
console.log(firstModule.div(6,2));

// //module wrapper
// (
//     function(exports require, module, __filename, __dirname)
//     {
//         // your module code goes here
//     }
// )

