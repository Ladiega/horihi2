import styles from '../../style/nav.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/img/logowhite.svg'
export default function Nav() {
  return (
    <div className={styles.nav_container}>
      <div className={styles.container_one}>
        <div className={styles.red_dot}></div>
        <div>HORI-HI</div>
      </div>      
        <ul className={styles.container_two}>
          <li>BIO</li>
          <li>TATTOOS</li>
          <li>PINTURAS</li>
          <li>CONTACTO</li>
          <li>BLOG</li>
        </ul>      
      <div>
        <Image
          src={logo}
          alt='logo hori-hi'
          width={30}
        />
      </div>
    </div>
  )
}