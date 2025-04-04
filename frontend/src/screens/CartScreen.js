import React, { useEffect }  from 'react';
import {useParams,useLocation, Link} from 'react-router-dom';
import { addToCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
 
 export default function CartScreen(props) {
     const params = useParams();
     const productId = params.id;
     const {search} =useLocation();
     const qtyInUrl = new URLSearchParams(search).get('qty');
     const qty = qtyInUrl?Number(qtyInUrl):1;
      
       const cart = useSelector(state => state.cart)
       const {cartItems} = cart
     const dispatch= useDispatch
     useEffect(() => {
      if (productId){
        dispatch(addToCart(productId, qty))
      }
          },[dispatch, productId, qty])
const removeFromCartHandler = (id) => {

}
     return (
         <div className='row top'>
         <div className='col-2'> 
          <h1>shopping Cart </h1>
          
          {cartItems.length === 0?<MessageBox> 
            Cart is empty <Link to="/">Go shopping</Link>
          </MessageBox>
          :
          (
            <ul>
              {
                cartItems.map((item) => (
                  <li key={item.product}>
                   <div className='row'>
                    <div>
                      <img src={item.image} alt={item.image} className='small'>
                      </img>
                    </div>
                    <div className='min-30'>
                      <Link to={`/product/${item.product}`}></Link>
                    </div>
                    <div>
                      <select 
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product),
                          Number(e.target.value)
                        )
                      }
                      >
                        {[...Array(item.countInStock).keys()].map(
                                 (x) => (
                                   <option key={x + 1} value={x + 1}>
                                     {x + 1}
                                   </option>
                                 )
                               )}

                      </select>
                    </div>
                    <div>${item.price}</div>
                    <div>
                      <button
                      type='button'
                      onClick={()=> removeFromCartHandler(item.product)}
                      >
                      Delete       
                      </button>
                    </div>

                   </div>
                  </li>
                ))
              }
            </ul>
          )
          }
         </div>
         </div>
       );
     }