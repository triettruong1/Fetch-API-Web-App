const Nav:React.FC = () => {

    return (
        <div className="container">
            <div className="navigation">
                <div className="nav-group flex-row">
                    <h1>Fiindr</h1>
                    <nav className="nav">
                        <a href="#">Products</a>
                        <a href="#">Developers</a>
                        <a href="#">Company</a>
                        <a href="#">Pricing</a>
                    </nav>
                </div>
                <button className="button">Download</button>
            </div>
        </div>
    );
}

export default Nav;