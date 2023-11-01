import styles from '../../style/section1.module.css'

import Image from 'next/image';
import section2 from '../../../public/img/section2.png'

export default function Section2() {
  return (
    <section className={styles.section1_container}>
      <Image
        alt='Intro Image'
        src={section2}
        layout='responsive'
      />
    </section>
  )
}