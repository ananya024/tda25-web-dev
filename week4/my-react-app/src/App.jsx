import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Button from "./Button/Button.jsx"
import Student from "./Student.jsx"
import List from "./List.jsx"
import MyComponent from "./MyComponent.jsx"
import Counter from "./Counter.jsx"
import React from "react";
import ComponentA from "./ComponentA.jsx"


function App()
{
  const fruits= [{id:1, name:"apple", cal:90},
                     {id:2, name:"orange", cal:80},
                     {id:3, name:"banana", cal:140},
                     {id:4, name:"coconut", cal:155},
                     {id:5, name:"pineapple", cal:136}];

  const veg= [{id:6, name:"patato", cal:90},
              {id:7, name:"orceleryange", cal:80},
              {id:8, name:"carrot", cal:140},
              {id:9, name:"capsicum", cal:155},
              {id:10, name:"beans", cal:136}];

  return(
    <>
      {/*intro*/}
      <Header/>
      <Food/>
      <Footer/>
      <hr></hr>

      {/*card*/}
      <Card/>
      <hr></hr>

      {/*CSS*/}
      <Button/>
      <hr></hr>

      {/*props*/}
      <Student name="asd" age={23} isStd={true}/>
      <Student name="fgh" age={43} isStd={false}/>
      <hr></hr>

      {/*List*/}
      {fruits.length >0 ? <List items={fruits} category="Fruits"/> : null}
      {veg.length && <List items={veg} category="Vegetables"/>}
      {/*if we dont do this, and the list is empty, the "Fruits" shows, and nothing then blank then "vege.." shows with list*/}
      {/*now is empty, then nothing shows in place of fruit,s, derectly veges*/}
      <hr></hr>
      
      {/*useState() and useEffect()*/}
      <MyComponent/>
      <hr></hr>

      {/*Counter()*/}
      <Counter/>
      <hr></hr>

      {/*useContext()*/}
      <ComponentA/>
      <hr></hr>
    </>
  );
}

export default App


