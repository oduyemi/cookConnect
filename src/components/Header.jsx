import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [sidenavWidth, setSidenavWidth] = useState('0');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out-sine',
      once: true,
    });

    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.pageYOffset >= navbar.offsetTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    const handleClickOutside = (e) => {
      const sidenav = document.getElementById("mySidenav");
      if (!sidenav.contains(e.target) && !e.target.classList.contains('slide-menu')) {
        setSidenavWidth('0');
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const openNav = () => {
    setSidenavWidth('250px');
  };

  const closeNav = () => {
    setSidenavWidth('0');
  };

  return (
    <header className="top">
      <div id="mySidenav" className="sidenav" style={{ width: sidenavWidth }}>
        <button className="closebtn" onClick={closeNav}>&times;</button>
        <a className="active" href="/">Home</a>
        <Link to="/recipe">About</Link>
        <Link to="/users">Recipes</Link>
      </div>

      <nav id="navbar" className={isSticky ? 'sticky' : ''}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xs-9">
              <a href="/"><img src="images/logo.png" alt="logo" /></a>
            </div>
            <div className="col-lg-8 col-xs-3">
              <div className="social-icons square">
                <div id="page-content-wrapper">
                  <span className="slide-menu" onClick={openNav}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

