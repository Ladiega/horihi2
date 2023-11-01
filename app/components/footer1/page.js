import styles from "../../style/footer1.module.css"

import Image from 'next/image'
import footer1 from '../../../public/img/footer.png'

export default function Footer1() {
  return (
    <footer className={styles.footer1_container}>
      <Image
        alt="footer img"
        src={footer1}
        layout="responsive"
      />

    </footer>
  )
}