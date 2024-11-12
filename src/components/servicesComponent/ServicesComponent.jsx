import React from 'react'
import styles from "./ServicesComponent.module.css"
import Image from 'next/image'
import img1 from "@/assets/pic/ser1.png"
import img2 from "@/assets/pic/ser2.png"
import img3 from "@/assets/pic/ser3.png"
import img4 from "@/assets/pic/ser4.png"

const ServicesComponent = () => {
  return (
    <div className={styles.container}>
      <h1>Our Services</h1>
      <div className={styles.imageContainer}>
      <Image width={230} className={styles.image} src={img1} alt='/a'/>
      <Image width={230} className={styles.image} src={img2} alt='/a'/>
      <Image width={230} className={styles.image} src={img3} alt='/a'/>
      <Image width={230} className={styles.image} src={img4} alt='/a'/>
      </div>
    </div>
  )
}

export default ServicesComponent