import "./styles.scss"
import dgmannLogo from '../../../assets/images/dgmann-logo.svg'
import { useState } from 'react';

function Header(props) {
    const doc = document.documentElement;
    let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const [scrolledDown, setScrolledDown] = useState(false);
    const logoCSSClass = scrolledDown ? 'header__logo header__logo--rotate' : 'header__logo';
    const headerCSSClass = scrolledDown ? 'header header--small' : 'header';

    window.addEventListener(
        "scroll",
        () => rotateLogo(),
        { passive: true }
    );

    function rotateLogo() {
        const newTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (newTop > top) {
            setScrolledDown(true)
        } else {
            setScrolledDown(false)
        }
        top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    }


    return (
        <header className={headerCSSClass}>
            <div className="header__logo-wrapper">
                <img className={logoCSSClass} src={dgmannLogo} alt="logo" />
            </div>
            <div className="header__content">
                <div>Menu</div>
            </div>
        </header>
    )
}

export default Header;