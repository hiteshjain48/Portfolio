import './App.css';
import Hero from './components/Hero';
import Project from './components/Project';
import Contact from './components/Contact';
import Who from './components/Who';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Who/>
      <Project/>
      <Contact/> 
      <Test/>
    </div>
  );
}

export default App;
