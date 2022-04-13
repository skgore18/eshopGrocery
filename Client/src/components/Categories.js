<<<<<<< HEAD
import React from 'react'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <div className='containerCat'>
        {categories.map(item=>(
            <CategoryItem item={item} key={item.id} />
        ))}
    </div>
  )
}

=======
import React from 'react'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <div className='containerCat'>
        {categories.map(item=>(
            <CategoryItem item={item} key={item.id} />
        ))}
    </div>
  )
}

>>>>>>> ebfd4258418cc50828d3b35c9aa9be5a4de1ee6f
export default Categories