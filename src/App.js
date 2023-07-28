import React ,{ useState, useEffect }from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Preloader from "./components/Pre";
import Home from './components/Home/Home';
import ScrollToTop from "./components/ScrollToTop";
import Navbar from './components/Navbar';
import Project from './components/Projecttopic/ProjectView';
import About from './components/About/About';
import Service from './components/Services/Service';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import LoadingBar from 'react-top-loading-bar'
function App() {
  const [load, upadateLoad] = useState(true);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router >
    <Preloader load={load} />
    <div className="App" id={load ? "no-scroll" : "scroll"}>
    <LoadingBar
        color='#f11946'
        progress={progress}
        waitingTime={500}
        height={"2px"}
      />
      <Navbar />
      <ScrollToTop />
      <Routes >
        <Route path="/" element={<Home setProgress={setProgress}/>}/>       
        <Route path="/about" element={<About setProgress={setProgress}/>} />
        <Route path="/service" element={<Service setProgress={setProgress}/>} />
        <Route path="/contact" element={<Contact setProgress={setProgress}/>} />
        <Route path="service/project-details" element={<Project  setProgress={setProgress}/>} />
        <Route path="*" element={<Navigate to="/" setProgress={setProgress}/>} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
