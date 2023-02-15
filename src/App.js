import React, { useState } from "react";
import ProductList from "./productList/index"
import ContactForm from "./ContactForm";

var products = [
  {name: 'T-shirt',
  price: '25'},
  {name: 'pants',
  price: '23'},
  {name: 'Toothpaste',
  price: '15'},
  {name: 'Shoe',
  price: '30'},
  {name: 'phone',
  price: '60'},
  {name: 'Drink',
  price: '12'}
]

function App() {

  return (
    <div>
     <ContactForm/>
    <ProductList let products = {products} />
    </div>
    
  );
}

export default App;
