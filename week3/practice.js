console.log('hello');
console.log("i like pizza");
window.alert('thii ss an alert');
window.alert('another alert');


document.getElementById("myH1").textContent='Hello';  //to display
document.getElementById("myP").textContent='Pizza';

//this is a comment

/*
This
is 
multiline
comm
*/

//variables............................................................
//1. declaration  let x;
//2. assignment   x=100;

let x;
x=100;

console.log(x) //This sends x to the console, not to the screen. 
                //It’s super useful for checking what your code is doing.

let age =25;
let price=10.99;
let gpa=2.1;
let firstName="Maxine";
let favFood="pizza";
let email="abc@gmail.com";
console.log(typeof age);
console.log(`you are ${age} years old`);
console.log(`the price is ${price}`);
console.log(`you gpa is ${gpa}`);
console.log(`you are ${firstName}`);
console.log(`the fav food is ${favFood}`);
console.log(`you gmail is ${email}`);

function sayHi() {
console.log("You clicked the button!");
}

let online=  true;
console.log(`Bro is online ${online}`);

let fullName="Maxine";
let std= true;

document.getElementById("p1").textContent= `your name is ${fullName}`;
document.getElementById("p2").textContent= `age ${age}`;
document.getElementById("p3").textContent= `is std ${std}`;


//arithmetic operator= oparands (values, variables, etc.)...............
//                     oparands (+, -, *, /, **)
//                     ex. 11= x+5;

let stds=30;
stds=stds;
stds=stds**2; // or stds**=2
console.log(stds);
stds+=1;
let extra=stds%3;
console.log(extra);
stds--
console.log(stds);


//user input............................................................
//1. windows promt (easy)
//2. html textbox (profesioal)

let nm;
nm = window.prompt("name:");
//or let usr = window.prompt("name:");
console.log(`name is ${nm}`);
let usr;
document.getElementById("mySub").onclick= function(){
    usr=document.getElementById("myText").value;
    console.log(`user is ${usr}`);
    document.getElementById("myH1").textContent=`Welcome ${usr}`;
}

//type conversion = change the datatype of a value ot another............
//                  (string, numbers, boolean)

let age2= window.prompt("how old? ");
console.log(age2, typeof age2);
let age3= window.prompt("how old? ");
age3=Number(age3);
age3++;
console.log(age3, typeof age3);

let w;
let y;
let z;
w=Number(w);
y=String(y);
z=Boolean(z);
console.log(w, typeof w);
console.log(y, typeof y);
console.log(z, typeof z);

w="pizza";
y="pizza";
z="pizza";
w=Number(w);
y=String(y);
z=Boolean(z);
console.log(w, typeof w);
console.log(y, typeof y);
console.log(z, typeof z);

w="0";
y="0";
z=0;  //z="0", wd give true as "0" is a string, "" wd give false
w=Number(w);
y=String(y);
z=Boolean(z);
console.log(w, typeof w);
console.log(y, typeof y);
console.log(z, typeof z);

// const=- var that cant be changed after assigned.......................

const PI=3.14159;
let r;
let c;
//PI=3434 //shows error
r=window.prompt('enter r:');
r=Number(r);
c=2*PI*r;
console.log(c);

document.getElementById("inputSubmit").onclick= function(){
    r2=document.getElementById("inputText").value;
    console.log(`rad is ${r2}`);
    c=2*PI*r2;
    console.log(`circum is ${c}`);
    document.getElementById("myH3").textContent=c;
}

// counter object..........................................................

//math object..............................................................

//Random number generator..................................................

// If statements...........................................................
let license=true
if (age>=18)
{
    console.log("old enough for license");
    if (license)
    {
        console.log("can drive");
    }
    // else if not used here
    else{
        console.log("get a lic");
    }
}
else
{
    console.log("not old for license");
}


// checked prop (prop det checked stt of html checkbox/radio btn)..........

const mySubmit=document.getElementById("mySubmit");

const myCheckBox=document.getElementById("myCheckBox");
const subResult=document.getElementById("subResult");

const visaBtn=document.getElementById("visaBtn");
const masterCardBtn=document.getElementById("masterCardBtn");
const payPalBtn=document.getElementById("payPalBtn");
const paymentResult=document.getElementById("paymentResult");

mySubmit.onclick= function()
{
    if (myCheckBox.checked)
    {
        subResult.textContent=`you are subscribed!`;
    }
    else
    {
        subResult.textContent=`you are not subscribed`;
    }

    if (visaBtn.checked)
    {
        paymentResult.textContent=`you are paying with visa`;
    }
    else if (masterCardBtn.checked)
    {
        paymentResult.textContent=`you are paying with masterCard`;
    }
    else if (payPalBtn.checked)
    {
        paymentResult.textContent=`you are paying with payPal`;
    }
    else
    {
        paymentResult.textContent=`you must select a payment types`;
    }
}

// Ternary op= shortcut to if else (__?__:__)...........................

document.getElementById("ageSubmit").onclick= function(){
    age=document.getElementById("inputAge").value;
    let msg=age>=18?"an adult":"a child";
    document.getElementById("myAge").textContent=`age: ${age}, you are ${msg}`;
    console.log(msg);
}

//switch- better than if else.................................
