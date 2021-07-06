import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.scss';
import {Home} from "./views/Home";
import React from "react";
import {
   BrowserRouter as Router,
   Switch,
   Route,
} from "react-router-dom";
import {Login} from "./views/Login";

import {Header} from "./components/Header";
import {CartItem} from "./views/CartItem";
import {ProductManager} from "./views/ProductManager";

function App() {
   return (
      <div className="App">
         <Router>
            <div>
               <Header/>

               <Switch>
                  <Route exact={true} path="/">
                     <Home/>
                  </Route>
                  <Route exact={true} path="/log-in">
                     <Login/>
                  </Route>
                  <Route exact={true} path="/cart-item">
                     <CartItem/>
                  </Route>
                  <Route exact={true} path="/product-manager">
                     <ProductManager/>
                  </Route>
               </Switch>
            </div>
         </Router>
      </div>
   );
}

export default App;