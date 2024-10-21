import { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/HomePage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import LocomotiveScroll from 'locomotive-scroll';

const HomePage = () => {
  useEffect(() => {
    new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
  }, []);

  return (
    <div data-scroll-container>
      <header>
        <a href="index.html" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="logo-container">
            <img
              src="https://media.discordapp.net/attachments/1035372833712386121/1288905349700649041/PNG_image_7.png?ex=67041126&is=6702bfa6&hm=0e89b1c85b1120b6d8cb4efdbddab4a3a93351b85e75f028bcaff4b6736ab7b2&=&format=webp&quality=lossless&width=711&height=711"
              alt="Logo"
            />
            <span className="logo">Project Quest</span>
          </div>
        </a>
        <nav className="desktop-nav">
          <div className="nav-item">
            <a href="#" className="nav-link">
              Applications <FontAwesomeIcon icon={faChevronDown} />
            </a>
          </div>
          <div className="nav-item">
            <a href="#" className="nav-link">
              Stuff <FontAwesomeIcon icon={faChevronDown} />
            </a>
          </div>
          <div className="nav-item">
            <a href="#" className="nav-link">
              Stuff <FontAwesomeIcon icon={faChevronDown} />
            </a>
          </div>
          <div className="nav-item">
            <a href="#" className="nav-link">Stuff</a>
          </div>
        </nav>
        <div className="auth-buttons">
          <a href="#signin" className="btn-signin">Discord</a>
          <a href="#start" className="btn-start">Get Started</a>
        </div>
      </header>

      <div className="container">
        <main>
          <section className="hero">
            <h1>
              <span className="innovative-glow">Innovative</span> Bots, Endless
              <span className="glow-container">
                <span className="gradient-blur possibilities">Possibilities</span>
                <span className="gradient-clear possibilities">Possibilities</span>
              </span>
            </h1>
            <p style={{ fontSize: '13.5px' }}>
              We create innovative Discord bots for a variety of server needs, offering endless possibilities for automation and engagement.
            </p>
            <a href="#" className="btn btn-primary">Get Started</a>
            <a href="#" className="btn btn-secondary">Discord</a>
          </section>
        </main>
      </div>

      <footer>
        <div className="footer-content">
          <div className="footer-column">
            <h4>Resources</h4>
            <a href="#">Blog</a>
            <a href="#">Documentation</a>
            <a href="#">Developers</a>
            <a href="#">Support</a>
          </div>

          <div className="footer-column">
            <h4>Community</h4>
            <a href="#">Discord Server</a>
            <a href="#">System Status</a>
            <a href="#">Become a Partner</a>
          </div>

          <div className="footer-column">
            <h4>Applications</h4>
            <a href="#">Toilet Paper</a>
            <a href="#">Automater</a>
            <a href="#">Game Arcade</a>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;