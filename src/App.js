import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { useDB } from './Components/Hooks/useDB';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { Context } from './Components/Functions/context';



const firebaseConfig = {
  apiKey: "AIzaSyA0K6-qq10lUvm1V2Ve8aTBT6iLY45j8VI",
  authDomain: "burgershop-1d953.firebaseapp.com",
  databaseURL: "https://burgershop-1d953.firebaseio.com",
  projectId: "burgershop-1d953",
  storageBucket: "burgershop-1d953.appspot.com",
  messagingSenderId: "765552491915",
  appId: "1:765552491915:web:9b5fb7952a5620fe10c38e"
};

firebase.initializeApp(firebaseConfig);

function App() {

  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  const database = firebase.database();
  const orderConfirm = useOrderConfirm();


  useTitle(openItem.openItem);
  const dbMenu = useDB(database);

  return (
    <Context.Provider value={{
      auth,
      openItem,
    }}>
      <GlobalStyle/>
      <NavBar/>
      <Order 
        {...orders} 
        {...openItem} 
        {...auth} 
        
        {...orderConfirm}
      />
      <Menu dbMenu={dbMenu} />
      { openItem.openItem && <ModalItem {...openItem} {...orders}/>}
      {orderConfirm.openOrderConfirm &&
      <OrderConfirm {...orders} {...auth} {...orderConfirm} 
      firebaseDatabase={firebase.database}/>}
    </Context.Provider>
  );
}
export default App;
