import styles from "../../style/footer1.module.css"
import Link from "next/link"
import Image from 'next/image'
import instagram from '../../../public/img/instagram.svg'
import whatsapp from '../../../public/img/whatsapp.svg'
import footer1 from '../../../public/img/footer.png'

export default function Footer1() {
  return (
    <footer className={styles.footer1_container}>
      <Image
        alt="footer img"
        src={footer1}
        layout="responsive"
      />
      <div>
        <h1>Contacto:</h1>
        <Link href='/'>
          <Image
          alt="whatsapp"
          src={whatsapp}
          width={30}
          />
            <p>(+57)321 410 8793</p>
        </Link>
        <Link href='/'>
          <Image
          alt="instagram"
          src={instagram}
          width={30}          
          />
          <p>@Ladiegatattoo</p>
        </Link>
      </div>

    </footer>
  )
}