'use client'

import Image from "next/image"
import whitekanji from '../../../public/img/whitekanji.svg'
import styles from "../../style/footer1.module.css"

export default function Form() {
  function handleClick() {
    console.log('handle click function its working!')
  }
  return (
    <div className={styles.section2_container}>
      <div className={styles.section2_subcontainer}>
        <div>
          <p>Mantente conectado.</p>
          <h1>NEWSLETTERS</h1>
        </div>
        <div>
          <form action="">
            <input type="text" placeholder="NOMBRE:" />
            <input type="text" placeholder="EMAIL:" />

          </form>
          <button className={styles.footer1_button} onClick={handleClick}>ENVIAR</button>
        </div>
      </div>
      <div className={styles.kanjicontainer}>
        <Image
          alt="whitekanji"
          src={whitekanji}
          width={50}
        />
        <p>お問い合わせ</p>
      </div>
    </div> 
  )
}