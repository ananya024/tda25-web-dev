
function add(a,b){
    return a+b;
}


function sub(a,b){
    return a-b;
}


function prod(a,b){
    return a*b;
}


function div(a,b){
    if (b==0){
        throw new Error('Divided by 0 XXX');
    }
    return a/b;
}

module.exports ={
    add, sub, prod, div
}