import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <body className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </body>
  );
}

export default App;
