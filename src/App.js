import React from 'react';
import './App.css';
import data from './data/data.json';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Productdetails from './Productdetails';

function App() {
  return (
   <BrowserRouter>
      <Route exact path='/products' component={Home} />
      <Route exact path='/productdetails' component={Productdetails} />
   </BrowserRouter>
  );
}

// Home

let Home=() =>{
  let products=data.products;
  return(
    <div className="row justify-content-center">
        {products.map((product,index)=>(
          <div className="col-lg-4 col-md-4 col-sm-10 mt-1" key={index}>
          <div className="card">
            <div className="card-body text-center">
              <img src={product.img} alt="product Img" style={{width:"30%"}}/>
              <h2>{product.name}</h2>
              <h4 className="text-secondary">{product.price}</h4>
              <Link to={{pathname:'/productdetails',data:{id:index}}} className="btn btn-primary">View Specifications</Link>
            </div>
          </div>
        </div>
        ))}
    </div>
  )
}

export default App;