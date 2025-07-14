import React, {useState, useEffect} from 'react';

function MyComponent()
{
    let [name, setName] = useState("Guest");
    let [age, setAge]= useState(0);
    let [employed, setEmp]= useState(true);

    const updateName = () =>{
        //name = "Spongebob";
        //console.log(name);
        setName("Spongebob");
    }

    const incrementAge = () =>
    {
        setAge(age+1);
    }

    const toggleStatus = () =>
    {
        setEmp(!employed);
    }


    const [count, setCount]= useState(0);
    const [color, setColor]= useState("green");

    const [width, setWidth]=useState(window.innerWidth);
    const [height, setHeight]=useState(window.innerHeight);



//    useEffect(() => {
  //      document.title= `Count:  ${count} ${color}`;
    //},[count, color]);
    //bcoz mereko title change nahi kaarna tha
    //also check comments below, its on useEffect only

    
    function addCount(){
        setCount(prvs => prvs+1); // or setCount(count+1)
    }

    function changeColor(){
        setColor(prvs => prvs=== "green" ? "red" : "green"); // or setCount(count+1)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("event listener added")

//        return () => {
  //          window.removeEventListener("resize", handleResize);
    //        console.log("event listener removed")
      //  }
    });
    //user resizes the window, run the handleResize function.

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width,height]);

    function handleResize()
    {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    
    [name, setName]=useState(""); //no const as initialized before
    const [qty, setQty]= useState();
    const [comm, setComm]= useState();

    const [pay, setPay]= useState();

    const [shipping, setShip]= useState("");


    function handleNameCh(event)
    {
        setName(event.target.value);
    }

    function handleQtyCh(event)
    {
        setQty(event.target.value);
    }

    function handleComm(event)
    {
        setComm(event.target.value);
    }

    function handlePay(event)
    {
        setPay(event.target.value);
    }

    function handleShip(event)
    {
        setShip(event.target.value);
    }

    return (
        <>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            <p>IsEmp: {employed?"Yes":"No"}</p>
            <button onClick={toggleStatus}>Change status</button>
            

            <p style={{color:color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={changeColor}>Change Color</button>
            
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>

            <div>
                <input value={name} onChange={handleNameCh} placeholder='enter name'/>
                <p>Name: {name}</p>
                <input value={qty} onChange={handleQtyCh} type='number'/>
                <p>Qty: {qty}</p>

                <textarea value={comm} onChange={handleComm} placeholder='enter comments'/>
                <p>Comm: {comm}</p>

                <select value={pay} onChange={handlePay}>
                    <option value="">Select an option</option> 
                    {/*first option displays, no placeholder*/}
                    <option value="Visa">Visa</option>
                    <option value="MasterCard">MasterCard</option>
                    <option value="GiftCard">GiftCard</option>
                </select>
                <p>Payment: {pay}</p>

                <label>
                    <input  type="radio" value="Pick Up"
                            checked={shipping==="Pick Up"}
                            onChange={handleShip}/>
                    Pick Up
                </label>
                <label>
                    <input  type="radio" value="Delivery"
                            checked={shipping==="Delivery"}
                            onChange={handleShip}/>
                    Delivery
                </label>
                <p>Shipping: {shipping}</p>
            </div>
        </>
    );
}

export default MyComponent


// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//               This component re-renders
//               This component mounts
//               The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})             // Runs after every re-render
// 2. useEffect(() => {}, [])         // Runs only on mount
// 3. useEffect(() => {}, [value])    // Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts



// onChange = event handler used primarily with form elements
// ex. <input>, <textarea>, <select>, <radio>
// Triggers a function every time the value of the input changes

