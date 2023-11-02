
import styles from '../../style/section2.module.css'
import Image from 'next/image';
import section2 from '../../../public/img/section2.png'

export default function Section2() {
  return (
    <section className={styles.section2_container}>
      <div className={styles.section2}>
        <Image
        alt='Intro Image'
        src={section2}
        layout='responsive'
      />
      </div>
      <div className={styles.section2_gallery_container}>
        <div>
          Imagen1
        </div>
        <div>
          Imagen2
        </div>
        <div>
          Imagen3
        </div>

      </div>
      
    </section>
  )
}