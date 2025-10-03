import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

const Intro = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {/* Mobile */}
      <div
        className="rounded-4 d-flex flex-column d-block d-md-none"
        style={{
          width: '314px',
          height: '264px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)'
        }}
      >
        {/* Return button */}
        <div class="d-flex justify-content-start pt-2 pb-3 ps-4">
          <button className="btn p-0 text-white d-flex fs-5" onClick={() => navigate('/')}>
            <i class="bi bi-arrow-left"></i>
          </button>
        </div>
        {/* Title */}
        <h1 className="text-white fw-normal fs-2" style={{ fontFamily: "'Fira sans', sans-serif" }}>
          Press the button to start recording
        </h1>
        {/* Buttons */}
        <div className="mt-auto mb-5 d-flex justify-content-center">
          {/* Record button */}
          <button
            className="btn d-flex align-items-center"
            style={{
              background: 'linear-gradient(270deg, #FF6E60 0%, #8E4A77 50%)',
              color: 'white',
              borderRadius: '35px',
              fontSize: '35px',
              lineHeight: '1',
              fontFamily: "'Fira Sans', sans-serif",
              padding: '14px 30px',
              margin: '20px',
              border: 'none'
            }}
            onClick={() => navigate('/recorder')}
          >
            <i class="bi bi-mic"></i>
          </button>
        </div>
      </div>

      {/* Desktop/Tablet */}
      <div
        className="rounded-4 d-flex flex-column d-none d-md-flex"
        style={{
          width: '571px',
          height: '437px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          paddingBottom: '40px'
        }}
      >
        {/* Return button */}
        <div class="d-flex justify-content-end pt-2 pb-3 pe-3 mb-4">
          <button className="btn p-0 text-white d-flex fs-3" onClick={() => navigate('/')}>
            <i class="bi bi-x"></i>
          </button>
        </div>
        {/* Title */}
        <div class="justify content center pt-5">
          <h1 className="text-white fw-normal fs-3" style={{ fontFamily: "'Fira sans', sans-serif" }}>
            Press the button to start recording...
          </h1>
        </div>
        {/* Buttons */}
        <div className="mt-auto mb-5 d-flex justify-content-center">
          {/* Record button */}
          <button
            className="btn d-flex align-items-center"
            style={{
              background: 'linear-gradient(270deg, #FF6E60 0%, #8E4A77 50%)',
              color: 'white',
              borderRadius: '35px',
              fontSize: '35px',
              lineHeight: '1',
              fontFamily: "'Fira Sans', sans-serif",
              padding: '14px 30px',
              margin: '20px',
              border: 'none'
            }}
            onClick={() => navigate('/recorder')}
          >
            <i class="bi bi-mic"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
