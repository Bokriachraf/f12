import React from 'react'
import data from '../data'
import {useParams, Link} from "react-router-dom"
import Rating from '../components/Rating';

export default function ProductScreen() {
    const {id}=useParams() ;
    const product= data.products.find((x)=> x._id=Number(id))
  return (
  <div>
   <Link to="/"> Back to result</Link>
    <div className='row top'>
      <div className='col-2'>
       <img className='large' src={product.image} alt={product.name}></img>
      </div>
      <div className='col-1'>
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating rating={product.rating}></Rating>
            </li>
            <li>Price: ${product.price}</li>
            <li>Description : <p>{product.description}</p></li>
          </ul>
      </div>
      <div className='col-1'>
        <div className='card card-body'>
          <ul>
            <li>
              <div className='row'>
                <div>Price </div>
                <div className='price'>${product.price}</div>
              </div>
            </li>
            <li>
              <div className='row'>
                <div>Status</div>
                <div>
               {/* TERNAIRE === if else */}
                  {product.CountInStock>0 ? (
                    <span className='success'>In Stock</span> 
                  ):(
                    <span className='error'>Unvailable</span>
                  )
                 }
                </div>
              </div>
            </li>
            <li>
              <button className='primary block'></button>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
  )
}
