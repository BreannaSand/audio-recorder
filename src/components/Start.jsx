import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {/* Mobile */}
      <div
        className="rounded-4 d-flex flex-column align-items-center d-block d-md-none"
        style={{
          width: '314px',
          height: '199px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)'
        }}
      >
        {/* Title */}
        <div className="pt-3">
          <h1 className="text-white m-0" style={{ fontFamily: "'Fira sans', sans-serif" }}>
            Recording studio
          </h1>
        </div>
        {/* Buttons */}
        <div className="mt-auto mb-5 d-flex gap-5">
          {/* Upload button */}
          <button
            className="btn d-flex align-items-center gap-2"
            style={{
              background: 'linear-gradient(270deg, #00CC99 0%, #487367 50%)',
              color: 'white',
              borderRadius: '35px',
              fontSize: '14px',
              lineHeight: '1',
              fontFamily: "'Fira Sans', sans-serif",
              padding: '15px 20px',
              border: '1px solid #00CC99'
            }}
          >
            Upload
            <i className="bi bi-upload"></i>
          </button>
          {/* Recorder button */}
          <button
            className="btn d-flex align-items-center gap-2"
            style={{
              background: 'linear-gradient(270deg, #FF6E60 0%, #8E4A77 50%)',
              color: 'white',
              borderRadius: '35px',
              fontSize: '14px',
              lineHeight: '1.5',
              fontFamily: "'Fira Sans', sans-serif",
              padding: '15px 20px',
              border: 'none'
            }}
            onClick={() => navigate('/Intro')}
          >
            Record
            <i className="bi bi-play-circle"></i>
          </button>
        </div>
      </div>

      {/* Desktop/Tablet */}
      <div
        className="rounded-4 d-flex flex-column align-items-center d-none d-md-flex"
        style={{
          width: '571px',
          height: '437px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          paddingTop: '7rem',
          paddingBottom: '6rem'
        }}
      >
        {/* Title */}
        <p className="text-white fs-1 mb-5" style={{ fontFamily: "'Fira Sans', sans-serif" }}>
          Recording studio
        </p>

        {/* Buttons */}
        <div className="mt-auto mb-5 d-flex" style={{ gap: '10rem' }}>
          {/* Upload button */}
          <button
            className="btn d-flex align-items-center gap-2"
            style={{
              background: 'linear-gradient(270deg, #00CC99 0%, #487367 50%)',
              color: 'white',
              borderRadius: '35px',
              fontSize: '16px',
              lineHeight: '1.5',
              fontFamily: "'Fira Sans', sans-serif",
              padding: '15px 25px',
              border: '1px solid #00CC99'
            }}
          >
            Upload
            <i className="bi bi-upload"></i>
          </button>
          {/* Recorder button */}
          <button
            className="btn d-flex align-items-center gap-2"
            style={{
              background: 'linear-gradient(270deg, #FF6E60 0%, #8E4A77 50%)',
              color: 'white',
              borderRadius: '35px',
              fontSize: '16px',
              lineHeight: '1.5',
              fontFamily: "'Fira Sans', sans-serif",
              padding: '15px 25px',
              border: 'none'
            }}
            onClick={() => navigate('/Intro')}
          >
            Record
            <i className="bi bi-play-circle"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
