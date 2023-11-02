'use client'

import styles from "../../style/footer1.module.css"
import Link from "next/link"
import Image from 'next/image'
import instagram from '../../../public/img/instagram.svg'
import whatsapp from '../../../public/img/whatsapp.svg'
import whitekanji from '../../../public/img/whitekanji.svg'
import footer1 from '../../../public/img/footer.png'
 
export default function Footer1() {
  function handleClick() {
    
   console.log('handle click function its working!')
 }
  return (
    <footer className={styles.footer1_container}>
      <div className={styles.img_container}>
      <Image
        alt="footer img"
        src={footer1}
        layout="responsive"
      />
      </div>
    <div className={styles.sections_container}>
      <div className={styles.section1_container}>
        <h1>Contacto:</h1>
        <div className={styles.icons_container}>
          <Link href='/'>            
              <Image
                alt="whatsapp"
                src={whatsapp}
                width={30}
              />                   
             (+57)321 410 8793           
          </Link>
        </div>
        <div className={styles.icons_container}>
          <Link href='/'>
            <Image
            alt="instagram"
            src={instagram}
            width={30}          
            />
            @Ladiegatattoo
          </Link>
        </div>
      </div>     
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
        </div>
      
    </footer>
  )
}