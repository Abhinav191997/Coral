import React from 'react'
import styles from "@/styles/Home.module.css";
import Image from 'next/image';
export default function NewStyles() {
  return (
   <>
        <div className={styles.popularStyleContent}>
      <h3>Explore new and popular styles</h3>
     <div>
        <Image src="/card-4.png"
          width={648}
          height={648}
          alt="Graphic Studio"/>
    </div>
    </div>
   
   </>
  )
}
