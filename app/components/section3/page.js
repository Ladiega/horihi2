import styles from '../../style/section1.module.css'
import Image from 'next/image'
import section3 from '../../../public/img/section3.png'



export default function Section3() {
  return (
    <div className={styles.section1_container}> 
      <Image
        alt="Section3img"
        src={section3}
        layout='responsive'
      />
      
    </div>
  )
}