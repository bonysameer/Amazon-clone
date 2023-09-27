import React from 'react';
import './home.css';
import AMAZONPIC from '../../assets/amazon-e-commerce-wallaper2.jpg';
import Product from './product/Product';
import product1 from '../../assets/productone.png';


const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
         <img className='home__image' src={AMAZONPIC} alt='Amazon wallpaper' />

         <div className='home__row'>
            <Product 
               title="The Lean Startup: How Constant Innovation Creates Radically Succesful Businesses Paperback"
               image={product1}
               price={29.99}
               rating={3}
             />
            
            <Product 
               title="SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s"
               price={109}
               image="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
               rating={3}
            />
            

         </div>
         <div className='home__row'>
            <Product 
               title= "Mens Casual Premium Slim Fit T-Shirts "
               price= {22.3}
               image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
               rating={4}
             />
            <Product
               title = "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive"
               price = {114}
               image = "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
               rating={5}
             />
            <Product
               title = "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED "
               price = {999.99}
               image = "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
               rating={5}
             />
         </div>
         <div className='home__row'>
            <Product
               title = "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin"
               price = {599}
               image = "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
               rating={4}
             />
         </div>
      </div>

    </div>
  )
}

export default Home