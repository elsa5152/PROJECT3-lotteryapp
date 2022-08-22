const Footer = () => (
    <footer className="text-center text-white" style={{backgroundColor: "#f1f1f1"}}>
    <div className="container pt-6">
        <section className="mb-6">
        <a
            target="_blank" rel="noopener noreferrer"
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.facebook.com/"
            role="button"
            data-mdb-ripple-color="dark"
            ><i className="fab fa-facebook-f"></i>
        </a>




        <a
            target="_blank" rel="noopener noreferrer"
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.instagram.com/"
            role="button"
            data-mdb-ripple-color="dark"
            ><i className="fab fa-instagram"></i>
        </a>

        <a
            target="_blank" rel="noopener noreferrer"
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.linkedin.com/"
            role="button"
            data-mdb-ripple-color="dark"
            ><i className="fab fa-linkedin"></i>
        </a>

        <a
            target="_blank" rel="noopener noreferrer"
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://github.com/elsa5152/PROJECT3-lotteryapp.git"
            role="button"
            data-mdb-ripple-color="dark"
            ><i className="fab fa-github"></i>
        </a>
        </section>
    </div>

    <div className="text-center text-white p-2" style={{backgroundColor: 'pink'}}>
        © {new Date().getFullYear()} 
        <a className="text-white" > Elsa</a>
    </div>
    </footer>
);

export default Footer;
