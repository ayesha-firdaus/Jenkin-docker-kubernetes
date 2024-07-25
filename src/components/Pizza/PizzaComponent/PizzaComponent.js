import React from 'react'
import styles from "./PizzaComponent.module.css"

export default function PizzaComponent({item}) {
console.log(item)
  return (
  
    <div className={styles.design}>
      <div className={styles.image}>
        <img src={item.photoName} className={item.soldOut&&styles.soldoutImg}/>
      </div>
      <div className={`${styles.text} ${item.soldOut&&styles.soldout}`}>
        <h4 className={item.soldOut&&styles.soldout}>{item.name}</h4>
        <p><em>{item.ingredients}</em></p>
        <p>${item.price}</p>
      </div>
    </div>
  )
}
