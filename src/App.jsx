import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Start from './components/start';
import Recorder from './components/Recorder';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Upload from './components/Upload';
import UploadSucess from './components/Upload-success';
function App() {
    return (
        <>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route path="/Recorder" element={<Recorder />} />
                    <Route path="/Upload" element={<Upload />} />
                    <Route path="/Upload-Sucess" element={<UploadSucess />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
