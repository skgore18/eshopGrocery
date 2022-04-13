<<<<<<< HEAD

import React from 'react'
import { Navigate } from 'react-router-dom'
import './CategoryItem.css'



const CategoryItem = ({item}) => {
  return (
    <div className='containerCitem'>
        <img className='cImage' src={item.img}/>
        <div className='cInfo'>
            <h1 className='cTitle'>{item.titles}</h1>
        </div>
    </div>
  )
}

=======

import React from 'react'
import { Navigate } from 'react-router-dom'
import './CategoryItem.css'



const CategoryItem = ({item}) => {
  return (
    <div className='containerCitem'>
        <img className='cImage' src={item.img}/>
        <div className='cInfo'>
            <h1 className='cTitle'>{item.titles}</h1>
        </div>
    </div>
  )
}

>>>>>>> ebfd4258418cc50828d3b35c9aa9be5a4de1ee6f
export default CategoryItem