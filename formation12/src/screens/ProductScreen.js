import React from 'react'
import data from '../data'

export default function ProductScreen(props) {
    const product= data.products.find((x)=> x._id===props.match.params.id)
  return (
    console.log('')
  )
}
