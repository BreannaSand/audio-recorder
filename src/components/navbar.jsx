function Navbar() {
    return (
        <>
            <header
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    zIndex: 1000,
                    backgroundColor: 'white',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}
            >
                {/* Den översta delen av navbaren kommer ändras beroende på om det är mobilt läge eller desktop läge*/}
                <div className="navbar-top text-black py-2 px-3 d-flex justify-content-start align-items-center">
                    <h1>
                        <span className="fw-bold">Chain </span>
                        <span className="fst-italic fw-light">of </span>
                        <span className="fw-bold">sounds</span>
                    </h1>
                    <nav className="d-none d-md-flex ms-3 ">
                        <a
                            href="#"
                            className="text-decoration-none text-black me-3 text-uppercase "
                        >
                            Profile
                        </a>
                        <a
                            href="#"
                            className="text-decoration-none text-black me-3 text-uppercase "
                        >
                            Chains of News
                        </a>
                        <a
                            href="#"
                            className="text-decoration-none text-black me-3 text-uppercase"
                        >
                            Lab
                        </a>
                        <a
                            href="#"
                            className="text-decoration-none text-black me-3 text-uppercase"
                        >
                            Instrument & Gear
                        </a>
                    </nav>
                    {/* hamburgarmeny utan någon fungerande funktion för tillfället*/}
                    <div className="d-md-none ms-5 justify-content-end text-black">
                        <button
                            className="btn  btn btn-dark custom-btn-size"
                            aria-label="Open menu"
                        >
                            <span className="text-white "> ☰</span>
                        </button>
                    </div>
                </div>
                <nav>
                    {/* /*Här nedan börjar motbilläget som endast visas på små skärmar.
                     Döljs när skärmläget blir 768px och uppåt
                     Tanken är att användaren ska kunna navigera utifrån dessa länkar i mobiltläge */}
                    <div className="nav-under text-white d-flex d-md-none flex-wrap justify-content-center text-center gap-2 py-1 ">
                        <a
                            href="#"
                            className="flex-fill fs-6 fw-bold text-white text-decoration-none text-uppercase"
                            aria-label="Mixer"
                        >
                            Mixer
                        </a>
                        <a
                            href="#"
                            className="flex-fill fs-6 fw-bold text-white text-decoration-none text-uppercase"
                            aria-label="Search Tracks"
                        >
                            Search Tracks
                        </a>

                        <a
                            href="#"
                            className="flex-fill fs-6 fw-bold text-white text-decoration-none text-uppercase"
                            aria-label="Tutorials"
                        >
                            Tutorials
                        </a>
                    </div>

                    {/* Desktop undermeny */}
                    <div className="nav-under text-white d-none d-md-flex  justify-content-start gap-4 py-2 px-3">
                        <a
                            href="#"
                            className="flex-fill fs-6 fw-bold text-white text-decoration-none text-uppercase"
                            aria-label="Tutorials"
                        >
                            Mixer
                        </a>
                        <a
                            href="#"
                            className="flex-fill fs-6 fw-bold text-white text-decoration-none text-uppercase"
                            aria-label="Tutorials"
                        >
                            Search Tracks
                        </a>
                        <a
                            href="#"
                            className="flex-fill fs-6 fw-bold text-white text-decoration-none text-uppercase"
                            aria-label="Tutorials"
                        >
                            Tutorials
                        </a>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
