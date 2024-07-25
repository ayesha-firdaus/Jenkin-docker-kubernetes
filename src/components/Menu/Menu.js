import React from 'react'
import style from "./Menu.module.css";
export default function Menu() {
  return (
    <div className={style.menu}>
      <h3 className={style.menuHeader}> our Menu</h3>
      <p className={style.text}>  Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.</p>
    </div>
  )
}
