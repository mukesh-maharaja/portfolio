import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/Resume'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Nav />
      <main>
        <section id="home"><Hero/></section>
        <section id="about"><About/></section>
        <section id="projects"><Projects/></section>
        <section id="contact"><Contact/></section>
      </main>
      <Footer />
    </div>
  )
}
