import React from 'react';
import './subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router';
import { useStateValue } from '../StateProvider';
// import { getBasketTotal } from '../../reducer';
import { getBasketTotal } from '../../reducer';

const Subtotal = () => {

   const history = useNavigate();
   const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
      <CurrencyFormat 
         renderText={(value) =>(
            <>
               <p>
                  Subtotal ({basket.length}items) : <strong>{value}</strong>
               </p>
               <small className='subtotal__gift'>
                  <input />This order contains a gift
               </small>
            </>
         )}
         decimalScale={2}
         value={getBasketTotal(basket)}
         displayType={'text'}
         thousandSeparator={true}
         prefix={'$'}
      />

      <button onClick={e => history('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal