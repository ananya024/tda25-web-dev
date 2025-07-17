
console.log('node module wrapper demo');

console.log('__....................filename', __filename);
console.log('__................dirname', __dirname);
console.log('__..........................');


module.exports.greet = function(name){
    console.log(`hello ${name}`);
}