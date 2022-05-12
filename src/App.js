import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './button';
import Cards from './cards'

function App() {
  const [arr, setArr] = useState([
    { image : " https://www.seekpng.com/png/small/217-2172983_unisex-t-shirt-purple-front-300px-x-350px.png",
      title : "Light Purple T-Shirt",
      price : "Price : 500 Rs.",
      quantity : "Quantity : 01" ,
      size : "Size : Medium",
      dicription : "Lor em Ipsum is simply dummy text of the printing and typesetting industry"  
    },
    { image : "https://m.media-amazon.com/images/I/B12NRS34ojS._CLa%7C2140%2C2000%7C71KMlLcydLL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX425._SX._UX._SY._UY_.png",
    title : "Purple T-Shirt",
    price : "Price : 500 Rs.",
    quantity : "Quantity : 01" ,
    size : "Size : Medium",
    dicription : "Lor em Ipsum is simply dummy text of the printing and typesetting industry"    
    },
    { image : "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81F-WiCwRXL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UL1500_.png",
    title : "Black T-Shirt",
    price : "Price : 500 Rs.",
    quantity : "Quantity : 01" ,
    size : "Size : Medium",
    dicription : "Lor em Ipsum is simply dummy text of the printing and typesetting industry"   
    },
    { image : " https://5.imimg.com/data5/NT/MS/NJ/SELLER-18835191/blue-crew-tshirt-1000x1000-800x800-500x500.jpg",
    title : "Blue T-Shirt",
      price : "Price : 500 Rs.",
      quantity : "Quantity : 01" ,
      size : "Size : Medium",
      dicription : "Lor em Ipsum is simply dummy text of the printing and typesetting industry"   
    },
    { image : " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdpsYYYhq9wn3VDuoCVXfWInDL0CJfi6GZy8KXYgrRnGIVMCQHdJTT0xOx_7KPV50mTJg&usqp=CAU",
    title : "Navy Blue T-Shirt",
    price : "Price : 500 Rs.",
    quantity : "Quantity : 01" ,
    size : "Size : Medium",
    dicription : "Lor em Ipsum is simply dummy text of the printing and typesetting industry"  
    },
    
    
  ])

  let addToCard = ()=>{
    
    alert(arr[0].title+"\n"+arr[0].size+"\n"+arr[0].price+"\nItem added successfully in your cart") 
  }








  return (
    <div className="App">
      <header className="App-header">
        {/* <p>{count}</p>
        <Button val="Add"  />
        <Button val="Delete" />
        <Button  val="Cancel"/>
        <Button  val="Edit"/> */}

        {arr.map ((e)=> (
          <Cards
          img ={e.image} 
          title = {e.title}
          price = {e.price}
          quantity = {e.quantity}
          size = {e.size}
          discription = {e.dicription }

          action = {addToCard}
          />
        ))}
        
      </header>
    </div>
  );
}

export default App;
