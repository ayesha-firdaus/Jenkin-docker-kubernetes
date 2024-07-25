import React from 'react'
import styles from "./Footer.module.css"
export default function Footer() {
  const hours=new Date().getHours();
  const openHour=12;
  const closeHour=22;
  console.log(openHour>hours)


  return (
    <div>
      <p className={styles.text}>We're open from {openHour} to {closeHour}. Come visit us or order online.</p>
      <button disabled={openHour>hours} className={styles.btn}>Order Now</button>
    </div>
  )
}
12>15