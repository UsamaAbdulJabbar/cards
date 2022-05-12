import './App.css';
import Button from './button';

function Cards(props){

    return (
        <>
        
           <div className='zero'>
           <div className='one'>
            <img src={props.img} />
            <h1>{props.title}</h1>
            <h2>{props.price}</h2>
            <h2>{props.quantity}</h2>
            <h2>{props.size}</h2>
            <p>{props.discription}</p>
            <hr></hr>
            <button onClick={props.action}>Add To Cart</button>
            
            </div>
           </div>
        
        
        </>
    )
}

export default Cards;