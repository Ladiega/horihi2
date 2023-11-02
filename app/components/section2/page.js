
import styles from '../../style/section2.module.css'

import Image from 'next/image';
import section2 from '../../../public/img/section2.png'
import photo1 from '../../../public/img/photo1section2.png'
import photo2 from '../../../public/img/photo2section2.png'
import photo3 from '../../../public/img/photo3section2.png'

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
          <Image
            alt='Intro Image'
            src={photo1}
            layout='responsive'
          />
        </div>
        <div>
          <Image
            alt='Intro Image'
            src={photo2}
            layout='responsive'
          />
        </div>
        <div>
          <Image
            alt='Intro Image'
            src={photo3}
            layout='responsive'
          />
        </div>

      </div>
      
    </section>
  )
}