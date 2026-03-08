import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Languages from './components/Languages';

function App(){
  return (
    <div className="container">
      <Header />
      <hr />
      <main>
        <About />
        <hr />
        <Education />
        <hr />
        <Experience />
        <hr />
        <Certifications />
        <hr />
        <Skills />
        <hr />
        <Languages />
      </main>
    </div>
  )
}


export default App;