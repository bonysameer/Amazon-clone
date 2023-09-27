import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Switch from 'react-router'
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './components/StateProvider';
import Payment from './components/payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51NryqJSDYaRNdUOfOiF6iSNvX8hXHkM3LHE8sk21gjTeqDsaptUHk41SZePRIHxmHtnlIPgERWQf9feIpE3cuoOM001J2RYrM6')

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('the user is >>>', authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path='/checkout' element={<Checkout />}/>
          <Route path='/login' element={<Login />}/>
          {/* <Route path='/payment' element={<Payment />}/> */}

          <Route path='/payment' element={<Elements stripe={promise}><Payment /></Elements>}/>

          {/* <Elements stripe={promise}> */}
          {/* <Route path='/payment' element={<Payment />}/> */}
          {/* </Elements> */}
          {/* <Route path='/payment' element={<Elements stripe={promise}><Payment /></Elements>}/> */}

          {/* <Elements stripe={promise}> */}
            {/* <Route path='/payment' element={<Payment />}/> */}
          {/* </Elements> */}
          
          
          
          {/* <Route path='/payment'> */}
            {/* <Elements stripe={promise}> */}
              {/* <Payment /> */}
            {/* </Elements> */}
          {/* </Route> */}
             

              {/* <Header /> */}
              {/* <Checkout /> */}
          {/* </Route> */}
          {/* <Route path="/"> */}
              {/* <Header /> */}
              {/* <Home /> */}
          {/* </Route> */}
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
