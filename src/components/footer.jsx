function Footer() {
    return (
        <>
            {/*Fast footer som paceras längst ner i fönstret.
       Fungerar på alla skärmstorlekar.
      Ändrar innehållet beroende på vad skrämstorleken är */}
            <footer
                className="bg-dark text-white py-1"
                style={{
                    position: 'fixed',
                    bottom: 0,
                    width: '100vw',
                    marginRight: 0,
                    left: 0
                }}
            >
                {/*Här nedan börjar motbilläget som endast visas på små skärmar.
                     Döljs när skärmläget blir 768px och uppåt
                     Tanken är att användaren ska kunna navigera utifrån dessa länkar i mobiltläge   */}
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-center text-center d-md-none py-3 ">
                        <h3 className="flex-fill fs-6">PROFILE</h3>
                        <h3 className="flex-fill fs-6">NEWS</h3>
                        <h3
                            className="flex-fill fs-6"
                            style={{ color: '#F98080' }}
                        >
                            LAB
                        </h3>
                        <h3 className="flex-fill fs-6">INSIGHTS</h3>
                        <h3 className="flex-fill fs-6">ACCOUNT</h3>
                    </div>
                    {/*Här nedan börjar desktop läget.
                     Visas när skärmläget är 768px med hjälp av bootstrapklassen d-md-flex  .
                     Gömms som standard med hjälp av bootstrap d-none då vi jobbade med mobilefirst  */}
                    <div className="d-none d-md-flex flex-row align-items-center justify-content-between ">
                        <h3>
                            <span className="fw-bold">Chain </span>
                            <span className="fst-italic fw-light">of </span>
                            <span className="fw-bold">sounds</span>
                        </h3>

                        <div className="d-flex flex-row  gap-2  ">
                            <p>INSTRUMENT & GEAR</p>
                            <p>PROFILE</p>
                            <p>LAB</p>
                            <p>CHAIN OF NEWS</p>
                        </div>

                        <div>
                            {' '}
                            {/*Gjorde href för tänkte att dessa länkar ska visa något dokument för användaren men dessa finns inte än så därav # efter.
                            La även till aria-label för bättre tillgänglighet */}
                            <a
                                href="#"
                                aria-label="Läs våra användarvillkor"
                                className="text-white d-block "
                            >
                                Terms of Service
                            </a>
                            <a
                                href="#"
                                aria-label="Läs vår integritetspolicy"
                                className="text-white d-block"
                            >
                                Privacy policy
                            </a>
                            <p className="mt-2">2025 © Chain of Sounds</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
