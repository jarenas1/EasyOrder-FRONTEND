import "./Footer.scss"
export default function Footer() {
    return (

        <>
            <footer className="footer container">

                <section className="footer-section">
                    <article className="footer-section__article">
                        <div className="footer-section__contacts">
                            <a href="https://wa.link/this3h"><i className="bi bi-whatsapp"></i> WHATSAPP</a>
                            <a href="https://www.instagram.com/lalogia.med/"><i className="bi bi-instagram"></i> INSTAGRAM</a>
                        </div>

                    </article>
                    <article className="footer-section__article">
                        <div className="footer-section__info">
                            <p className="color-primary">Producido por:</p>
                            <figure className="footer-section__figure">
                                <img src='src\assets\logo.png' alt="Logo" />
                            </figure>
                        </div>
                    </article>
                </section>
            </footer>

    </>
  )
}
