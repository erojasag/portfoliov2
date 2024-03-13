import AboutMe from '../components/AboutMe';
import ContactMe from '../components/ContactMe';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
function Layout() {
  return (
    <div className="max-w-6xl px-10 pt-0 mx-auto">
      <Hero />
      <AboutMe />
      <Skills />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default Layout;
