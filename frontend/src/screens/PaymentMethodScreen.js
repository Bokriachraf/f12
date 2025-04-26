import React, { useState } from 'react'

export default function PaymentMethodScreen() {
    const [paymentMethod,setPaymentMethod]=useState('Paypal')
  return (
    <div>
          <CheckoutSteps step1 step2 step3 ></CheckoutSteps>
          <form className='form' onSubmit={submitHandler}>
            <div>
                <h1>Payment</h1>
            </div>
            <div>
                <div>
                    <input
                     type='radio'
                     id='stripe'
                      value='Stripe' 
                      name='paymentMethod'
                      required
                      checked
                      onChange={(e)=> setPaymentMethod(e.target.value)}
                      ></input>
                      <label htmlFor="stripe">Stripe</label>
                </div>
            </div>
            <div>
                <button className='primary' type='submit'>Continue</button>
            </div>
          </form>
    </div>
  )
}
