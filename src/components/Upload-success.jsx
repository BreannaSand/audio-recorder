import { useNavigate } from 'react-router-dom';

function UploadSucess() {
    const navigate = useNavigate();
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            {/* Mobile */}
            <div
                className="rounded-4 d-flex flex-column align-items-center d-block d-md-none position-relative"
                style={{
                    width: '314px',
                    height: '199px',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)'
                }}
            >
                <div className="w-100">
                    <div className="d-flex justify-content-start">
                        <i
                            className="bi bi-arrow-left text-white fs-3 ms-4 mt-3  fw-bold "
                            onClick={() => navigate('/')}
                            role="button"
                            tabIndex="0"
                            aria-label="Go back to home"
                        />
                    </div>
                </div>

                <h2
                    className="text-white p-2 text-center "
                    style={{ fontFamily: 'Fira-sans', fontSize: '28px' }}
                >
                    Your file has been uploaded
                </h2>
            </div>

            {/* Desktop */}
            <div
                className="rounded-4 d-none d-md-flex flex-column justify-content-between align-items-center position-relative"
                style={{
                    width: '317px',
                    height: '233px',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    padding: '2rem'
                }}
            >
                <div className="w-100">
                    <div className="d-flex justify-content-start">
                        <i
                            className="bi bi-arrow-left text-white fs-3 fw-bold"
                            onClick={() => navigate('/')}
                            role="button"
                            tabIndex="0"
                            aria-label="Go back to home"
                        />
                    </div>
                    <p
                        className="text-white  text-center fs-2  "
                        style={{
                            fontSize: '32px',
                            fontFamily: 'Fira-sans'
                        }}
                    >
                        Your file has been uploaded
                    </p>
                </div>
            </div>
        </div>
    );
}
export default UploadSucess;
