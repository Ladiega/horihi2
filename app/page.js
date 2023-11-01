import Nav from './components/navbar/page'
import Section1 from './components/section1/page'
import Section2 from './components/section2/page'
import Section3 from './components/section3/page'
import Footer1 from './components/footer1/page'
import Footer2 from './components/footer2/page'

export default function Home() {
  return (
    <main>
      <Nav/>
      <Section1 />
      <Section2 />
      <Section3/>
      <Footer1/>
      <Footer2/>

    </main>
  )
}
