import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Start from './components/start';
import Recorder from './components/Recorder';
import Intro from './components/intro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/Recorder" element={<Recorder />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
