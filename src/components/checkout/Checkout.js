import React from 'react';
import AMAZONBANNER from '../../assets/image1.jpg';
import './checkout.css';
import Subtotal from '../subtotal/Subtotal';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {

  const[{ basket, user },dispatch] = useStateValue();

  // React.useEffect(()=>{
    // const data = localStorage.getItem("my cart");
    // if(data){
      // dispatch(JSON.parse(data))
    // }
  // }, []);
  // 
  return (
    <div className='checkout'>
      <div className='checkout__left'>
         <img className='checkout__ad' src={AMAZONBANNER} alt='banner-logo'/>
      
         <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className='checkout__title'>Your Shopping Basket</h2>

            {basket.map(item => (
              <CheckoutProduct 
                id= {item.id}
                title= {item.title}
                price= {item.price}
                image= {item.image}
                rating={item.rating}

              />
            ))}
         </div>
      </div>

      <div className='checkout__right'>
         <Subtotal />
         {/* <h2>Your Subtotal</h2> */}
      </div>
    </div>
  )
}

export default Checkout