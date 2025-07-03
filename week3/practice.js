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

//2. variables............................................................
//  a. declaration  let x;
//  b. assignment   x=100;

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


//3. arithmetic operator= oparands (values, variables, etc.)...............
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


//4. user input............................................................
//  a. windows promt (easy)
//  b. html textbox (profesioal)

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

//5. type conversion = change the datatype of a value ot another............
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

//6. const= var that cant be changed after assigned.......................

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

//7. counter object..........................................................

//8. math object..............................................................

//9. Random number generator..................................................

//10. If statements...........................................................
const mytext=document.getElementById("mytext");
const mysubmit=document.getElementById("mysubmit");
const resultEle=document.getElementById("resultEle");


mysubmit.onclick=function()
{
    age=mytext.value;
    age=Number(age);

    if(age >= 100) {
    resultEle.textContent=`You are TOO OLD to enter this site`;
    }
    else if(age == 0){
    resultEle.textContent=`You can't enter. You were just born.`;
    }
    else if(age >= 18){
    resultEle.textContent=`You are old enough to enter this site`;
    }
    else if(age < 0) {
    resultEle.textContent=`Your age can't be below 8`;
    }
    else{
    resultEle.textContent=`You must be 18+ to enter this site`;
    }
}





//11. checked prop (prop det checked stt of html checkbox/radio btn)..........

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

//12. Ternary op= shortcut to if else (__?__:__)...........................

document.getElementById("ageSubmit").onclick= function(){
    age=document.getElementById("inputAge").value;
    let msg=age>=18?"an adult":"a child";
    document.getElementById("myAge").textContent=`age: ${age}, you are ${msg}`;
    console.log(msg);
}

//13. switch- better than if else.................................

//14. String methods 
//15. String slicing 
//16. Method chaining
//17. Logical operators
//18. Strict equality 
//19. While loops 

//20 02:34:53 For loops 🔂...........................................
for(let i=1; i <= 20; i++){
    if(i== 13){
    break;
    }
    else{
    console.log(i);
    }
}

//21 02:40:37 ⭐ Number guessing game ↕

//22 02:49:31 Functions 📞...........................................

function happyBirthday (username, age)
{
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log("Happy birthday to you!");
    console.log(`You are ${age} years old`);
}

happyBirthday ("BroCode", 25);

function add(x, y)
{
return x + y;
}
function subtract(x, y)
{
return x -y;
}
function multiply(x, y) 
{
return x * y;
}
function divide(x, y)
{
return x / y;
}

function isEven(number)
{
return number%2===0 ? true : false;
}

console.log(multiply(2,3));
console.log(isEven(8));
function isValidEmail(email)
{
    return email.includes("@") ? true : false;
}
console.log(isValidEmail("bro@fake.com"));


//23 03:01:44 Variable scope 🏠
//24 03:07:10 ⭐ Temperature conversion program 🌡️

//25 03:23:28 Arrays ..................................................
let fruits = ["apple", "orange", "banana"];
//fruits.push("coconut");
//fruits.pop();
//fruits.unshift("mango"); //adds to front of array
//fruits.shift(); //It removes the element at 0, shifts others -1
//console.log(fruits[3]); //if extra, shows "unavailable"

let numFr=fruits.length;
let idxApple =fruits.indexOf("apple");

for (let i=numFr; i>=0;i--) //if numFr, 1st unavailable, if numFr-1, ok
{
    console.log(fruits[i]);
}

fruits.sort().reverse();

for(let fr of fruits)
{
    console.log(fr);
}
//26 03:31:33 Spread operator 📖
//27 03:36:27 Rest parameters 🗄
//28 03:44:32 ⭐ Dice Roller program 🎲
//29 03:58:44 ⭐ Random password generator 🔑
//30 04:10:49 Callbacks 🤙

//31 04:18:05 forEach() ➿............................................
//      method to iterate voer the ElementInternals
//      and apply a specified func (callback) to each ele
//  array.forEach(callback)
//  ele, idx, arr are provided

let  nums=[1,2,3,4,5];
nums.forEach(display);
function display(element)
{
    console.log(element);
}

function double(element, index, array)
{
    array[index]=2*element;
}
nums.forEach(double);

function cube(element, index, array)
{
    array[index]=Math.pow(element,3);
}
nums.forEach(cube);

fruits = ["apple", "orange", "banana"];
fruits.forEach(cap);
function cap(ele,idx,arr)
{
    arr[idx]=ele.charAt(0).toUpperCase() + ele.slice(1);
}

//32 04:26:07 map() 🗺
//33 04:33:08 filter() 🚰
//34 04:39:37 reduce() ♻
//35 04:45:07 Function expressions
//36 04:52:39 Arrow functions 🎯

//37 05:00:40 JavaScript Objects🧍.....................................

const person1 = {
firstName: "Spongebob",
lastName: "Squarepants",
age: 30,
isEmployed: true,
sayHello: function() { console.log("Hi! I am Spongebob!")},
sayBye: function() { console.log("Goodbye!")}
};

const person2 = {
firstName: "Patrick",
lastName: "Star",
age: 42,
isEmployed: false,
sayHello: function(){console.log(`Hey I'm ${this.firstName}`)},
sayBye: function(){console.log("Bye....")}
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.sayBye();
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.sayBye();


//38 05:07:40 What is THIS 👈
//39 05:12:07 Constructors 🛠
//40 05:17:38 Classes 🏭
//41 05:23:47 STATIC keyword ⚡
//42 05:31:50 Inheritance 🐇
//43 05:38:53 SUPER keyword 🦸‍♂️
//44 05:48:14 Getters & Setters 📐
//45 06:01:28 Destructuring 💥
//46 06:10:08 Nested objects 📫
//47 06:19:21 Arrays of objects 🍎
//48 06:29:21 Sorting 🗃
//49 06:36:03 Shuffle an array 🔀
//50 06:40:08 Dates 📅
//51 06:48:09 Closures 🔒
//52 06:59:07 setTimeout() ⏰
//53 07:05:20 ⭐ Digital Clock program 🕐
//54 07:16:07 ⭐ Stopwatch program ⏱
//55 07:34:12 ES6 Modules 🚢
//56 07:40:17 Asynchronous code 💤
//57 07:45:04 Error handling ⚠
//58 07:54:06 ⭐ Calculator program 🖩

//59 08:09:26 What is the DOM? 🌳.......................................
//  DOM = DOCUMENT OBJECT MODEL
//  Object{} that represents the page you see in the web browser
//  and provides you with an API to interact with it.
//  Web browser constructs the DOM when it loads an HTML document,
//  and structures all the elements in a tree-like representation.
//  JavaScript can access the DOM to dynamically
//  change the content, structure, and style of a web page.

document.title="My Website";
document.body.style.backgroundColor="hsl(0, 0%, 15%)";
//  This changes the background color of the entire page (<body>) 
//  to a dark gray using HSL color format.
console.dir(document);
//  This logs the entire document object (the DOM) 
//  to the console in a tree-like, expandable structure.
//  It’s useful for exploring all elements and properties of the page.

const username = "";
const welcomeMsg = document.getElementById("welcome-msg");
//This grabs the HTML element with the ID welcome-msg 
//and stores it in the variable welcomeMsg
//html: <h1 id="welcome-msg">Welcome, </h1>

welcomeMsg.textContent += username === "" ? "Guest" : username;

console.dir(document);

//60 08:14:26 Element selectors 📑......................................
// element selectors = Methods used to target and manipulate HTML elements
// They allow you to select one or multiple HTML elements 
// from the DOM (Document Object Model)
//
// 1. document.getElementById()         // ELEMENT OR NULL
// 2. document.getElementsByClassName() // HTML COLLECTION
// 3. document.getElementsByTagName()   // HTML COLLECTION
// 4. document.querySelector()          // ELEMENT OR NULL
// 5. document.querySelectorAll()       // NODELIST

const myHeading = document.getElementById("my-headingg");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";
console.log(myHeading);

const fruitss = document.getElementsByClassName("fruits");
console.log(fruitss);
fruits[0].style.backgroundColor="yellow";
for (let frt of fruitss)
    {frt.style.backgroundColor="yellow";}

const fruits = document.getElementsByClassName("fruits");
Array.from(fruits).forEach(fruit => {
  fruit.style.backgroundColor = "yellow";
});





//61 08:32:04 DOM navigation 🧭
//62 08:47:31 Add & change HTML 🛠️......................................
//63 09:03:03 Mouse events 🖱
//64 09:13:33 Key events ⌨
//65 09:24:49 Hide/show HTML 🖼
//66 09:30:00 NodeLists 📃
//67 09:43:21 classList 🧾..............................................
//68 09:59:20 ⭐ Rock Paper Scissors 👊
//69 10:18:14 ⭐ Image Slider 🖼️
//70 10:34:03 Callback Hell? 🔥
//71 10:39:50 Promises 🤞
//72 10:52:24 Async/Await ⏳
//73 10:57:00 JSON files 📄
//74 11:07:07 Fetch data from an API ↩️
//75 11:21:22 ⭐ Weather App project ☀️