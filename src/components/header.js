import Logo from "./images/sh-logo.png";
import "./styles/styles.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <img src={Logo} alt="Side Hustle Logo" />
                <h1>CV REVIEW</h1>
            </div>

            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#prices">Prices</a></li>
                    <li><a href="#upload">Upload</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
