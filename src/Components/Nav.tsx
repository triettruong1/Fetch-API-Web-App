import React from "react";
import Media from "react-media";

const Nav:React.FC = () => {

    return (
        <>
            <Media query="(min-width: 420px)" render={() => {
                return(
                    <div className="navigation fade">
                        <div className="container flex-row">
                            <div className="nav-group flex-row">
                                <h1>F<b className="text-accent">ii</b>ndr</h1>
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
            }}/>
            <Media query="(max-width: 420px)" render={() => {
                return(
                    <div className="navigation container">
                        <h1>F<b className="text-accent">ii</b>ndr</h1>
                        <div className="nav-button"></div>
                    </div>
                );
            }}/>
        </>
    );
}

export default Nav;