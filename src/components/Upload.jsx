import { useNavigate } from 'react-router-dom';

function Upload() {
    const navigate = useNavigate();

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            {/* Mobile */}
            <div
                className="rounded-4 d-flex flex-column align-items-center d-block d-md-none position-relative"
                style={{
                    width: '314px',
                    height: '401px',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)'
                }}
            >
                <div className="w-100 d-flex justify-content-start">
                    <i
                        className="bi bi-arrow-left text-white fs-1 fw-bold ms-4 mt-3"
                        onClick={() => navigate('/')}
                        role="button"
                        tabIndex="0"
                        aria-label="Go back to home"
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                <h2
                    className="text-white p-3"
                    style={{ fontFamily: 'Fira-sans', fontSize: '32px' }}
                >
                    Upload your file
                </h2>

                <div
                    className="d-flex flex-column justify-content-center align-items-center"
                    style={{
                        width: '256px',
                        height: '176px',
                        backgroundColor: 'rgba(217, 217, 217, 0.6)',
                        borderRadius: '10px',
                        cursor: 'pointer'
                    }}
                >
                    <i
                        className="bi bi-cloud-arrow-up text-black "
                        style={{ fontSize: '45px' }}
                    />
                    <p
                        className="text-black fw-semibold text-center px-3 "
                        style={{ fontSize: '20px' }}
                    >
                        Click here to choose a file
                    </p>
                </div>

                {/* Upload button */}
                <div className="w-100 d-flex justify-content-end mt-4 me-5">
                    <button
                        className="btn d-flex align-items-center gap-2"
                        style={{
                            background:
                                'linear-gradient(270deg, #00CC99 0%, #487367 50%)',
                            color: 'white',
                            borderRadius: '35px',
                            fontSize: '16px',
                            fontFamily: "'Fira Sans', sans-serif",
                            padding: '10px 20px',
                            border: '1px solid #00CC99'
                        }}
                        onClick={() => navigate('/upload-sucess')}
                    >
                        Upload <i className="bi bi-upload" />
                    </button>
                </div>
            </div>

            {/* Desktop */}
            <div
                className="rounded-4 d-none d-md-flex flex-column justify-content-between align-items-center position-relative"
                style={{
                    width: '571px',
                    height: '437px',
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
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                    <h3
                        className="text-white fs-2 mt-3"
                        style={{ fontFamily: 'Fira-sans', fontSize: '32px' }}
                    >
                        Upload your file
                    </h3>
                </div>

                <div
                    className="d-flex flex-column justify-content-center align-items-center"
                    style={{
                        width: '300px',
                        height: '200px',
                        backgroundColor: 'rgba(217, 217, 217, 0.6)',
                        borderRadius: '10px',
                        cursor: 'pointer'
                    }}
                >
                    <i
                        className="bi bi-cloud-arrow-up text-black mb-3"
                        style={{ fontSize: '45px' }}
                    />
                    <p
                        className="text-black fw-semibold text-center px-3"
                        style={{ fontSize: '23px' }}
                    >
                        Drag and drop a file here or click to upload
                    </p>
                </div>

                {/* Upload button*/}
                <div className="w-100 d-flex justify-content-end mt-4">
                    <button
                        className="btn d-flex align-items-center gap-2"
                        style={{
                            background:
                                'linear-gradient(270deg, #00CC99 0%, #487367 50%)',
                            color: 'white',
                            borderRadius: '35px',
                            fontSize: '16px',
                            fontFamily: "'Fira Sans', sans-serif",
                            padding: '10px 20px',
                            border: '1px solid #00CC99'
                        }}
                        onClick={() => navigate('/upload-Sucess')}
                    >
                        Upload <i className="bi bi-upload" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Upload;
