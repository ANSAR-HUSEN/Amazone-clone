import React from 'react'
import classes from './Category.module.css'
import CategoryCard from './CategoryCard'
import Categorydata from './CategoryInfo'

function Category() {
  return (
    <section className={classes.Category__container}>
    {Categorydata.map((singleData) => {
        return <CategoryCard data ={singleData}/>
    })}

    </section>
  )
}

export default Category