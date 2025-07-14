
function List(props)
{
    //instead of here, we initialise in App.jsx so that can be generalized
    
    
    //const fruits= ["apple","orange","banana","coconut","pineapple"];
    //const fruits= [{id:1, name:"apple", cal:90},{id:2, name:"orange", cal:80},{id:3, name:"banana", cal:140},{id:4, name:"coconut", cal:155},{id:5, name:"pineapple", cal:136}];
    //fruits.sort(); 
    
    //fruits.sort(((a, b) => a.name.localeCompare(b.name))); //alphabetical
    //fruits.sort(((a, b) => a.name.localeCompare(a.name))); //reverse alphabetical
    //fruits.sort(((a, b) => a.cal-b.cal)); //numeric
    //fruits.sort(((a, b) => b.cal-a.cal)); //rev numeric
    
    //const highCalFruits=fruits.filter(fruit => fruit.cal>100);
    
    //const listItems= fruits.map(fruit => <li>{fruit}</li>);
    //const listItems= fruits.map(fruit => <li>{fruit.name}, {fruit.cal}</li>);
    
    const category = props.category;

    const itemList = props.items;
    
    const listItems= itemList.map(item => <li key={item.id}>
                                            {item.name} : &nbsp; 
                                            <b>{item.cal}</b>
                                        </li>);
    return(
    <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
    </>);
}

List.defaultProps= //incase category / items missing
{
    category:"Undefined",
    items:[],
}

export default List