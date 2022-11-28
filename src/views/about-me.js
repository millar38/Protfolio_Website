import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './about-me.css'

const AboutMe = (props) => {
  return (
    <div className="about-me-container">
      <Helmet>
        <title>About-Me - DanPortfolioWebsite</title>
        <meta property="og:title" content="About-Me - DanPortfolioWebsite" />
      </Helmet>
      <div data-role="Header" className="about-me-navbar-container">
        <div className="about-me-navbar">
          <Link to="/" className="about-me-navlink">
            <img
              alt="image"
              src="/playground_assets/fancyname-200h.png"
              className="about-me-image"
            />
          </Link>
          <div className="about-me-links-container">
            <Link to="/" className="about-me-link Anchor">
              Home
            </Link>
            <Link to="/portfolio" className="about-me-link01 Anchor">
              Portfolio
            </Link>
            <span className="about-me-link02 Anchor">Resume</span>
            <Link to="/about-me" className="about-me-link03 Anchor">
              About Me
            </Link>
          </div>
          <div className="about-me-left-side"></div>
          <div className="about-me-right-side">
            <button className="about-me-cta-btn button Anchor">
              Work In Progress
            </button>
          </div>
          <div data-role="MobileMenu" className="about-me-mobile-menu">
            <div className="about-me-container1">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="about-me-image1"
              />
              <div data-role="CloseMobileMenu" className="about-me-close-menu">
                <svg viewBox="0 0 1024 1024" className="about-me-icon">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="about-me-links-container1">
              <span className="about-me-link04 Anchor">Resources</span>
              <span className="about-me-link05 Anchor">Inspiration</span>
              <span className="about-me-link06 Anchor">Process</span>
              <span className="about-me-link07 Anchor">Our story</span>
            </div>
          </div>
        </div>
      </div>
      <div id="resources" className="about-me-welcome">
        <div className="about-me-content-container">
          <div className="about-me-hero-text">
            <h1 className="about-me-heading Section-Heading">
              I&apos;m Pretty Cool
            </h1>
            <span className="about-me-text Section-Text">
              My name is Daniel Millar, and this is the website I created in
              order to showcase my projects, passions, and resume!
            </span>
            <button className="about-me-cta-btn1 button Anchor">
              To Protfolio
            </button>
          </div>
        </div>
      </div>
      <div className="about-me-section-separator"></div>
      <div className="about-me-footer-container">
        <div className="about-me-footer">
          <div className="about-me-social-links">
            <a
              href="https://www.linkedin.com/in/daniel-millar-782393223/"
              target="_blank"
              rel="noreferrer noopener"
              className="about-me-link08"
            >
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="about-me-linked-in-icon"
              >
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/dan_millar814/"
              target="_blank"
              rel="noreferrer noopener"
              className="about-me-link09"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="about-me-instagram-icon"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
          </div>
          <div className="about-me-contact-information">
            <div className="about-me-location-1">
              <div className="about-me-email">
                <svg viewBox="0 0 1024 1024" className="about-me-icon4">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <span className="Section-Text">dmillar2001@gmail.com</span>
              </div>
              <div className="about-me-phone">
                <svg
                  viewBox="0 0 804.5714285714286 1024"
                  className="about-me-icon6"
                >
                  <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                </svg>
                <span className="Section-Text">(609)-432-2114</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
