import styles from '../../style/section1.module.css'

import Image from 'next/image';
import intro from '../../../public/img/intro.png'

export default function Section1() {
  return (
    <section className={styles.section1_container}>
      <Image
        alt='Intro Image'
        src={intro}  
        layout='responsive'
      />
    </section>
  )
}