import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './portfolio.css'

const Portfolio = (props) => {
  return (
    <div className="portfolio-container">
      <Helmet>
        <title>Portfolio - DanPortfolioWebsite</title>
        <meta property="og:title" content="Portfolio - DanPortfolioWebsite" />
      </Helmet>
      <div data-role="Header" className="portfolio-navbar-container">
        <div className="portfolio-navbar">
          <Link to="/" className="portfolio-navlink">
            <img
              alt="image"
              src="/playground_assets/fancyname-200h.png"
              className="portfolio-image"
            />
          </Link>
          <div className="portfolio-links-container">
            <Link to="/" className="portfolio-link Anchor">
              Home
            </Link>
            <a href="#PortfolioTop" className="portfolio-link01 Anchor">
              Portfolio
            </a>
            <span className="portfolio-link02 Anchor">Resume</span>
            <Link to="/about-me" className="portfolio-link03 Anchor">
              About Me
            </Link>
          </div>
          <div className="portfolio-right-side">
            <button className="portfolio-cta-btn">Work In Progress</button>
          </div>
          <div data-role="MobileMenu" className="portfolio-mobile-menu">
            <div className="portfolio-container01">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="portfolio-image01"
              />
              <div data-role="CloseMobileMenu" className="portfolio-close-menu">
                <svg viewBox="0 0 1024 1024" className="portfolio-icon">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="portfolio-links-container1">
              <span className="portfolio-link04 Anchor">Resources</span>
              <span className="portfolio-link05 Anchor">Inspiration</span>
              <span className="portfolio-link06 Anchor">Process</span>
              <span className="portfolio-link07 Anchor">Our story</span>
            </div>
          </div>
        </div>
      </div>
      <div id="PortfolioTop" className="portfolio-welcome">
        <h1 className="portfolio-heading Section-Heading">Portfolio</h1>
        <div className="portfolio-container02">
          <a href="#IRECHeader" className="portfolio-cta-btn1">
            IREC
          </a>
          <a href="#ECADHeader" className="portfolio-cta-btn2">
            ECAD &amp; PCB
          </a>
          <a href="#SerNetHeader" className="portfolio-cta-btn3">
            Servers &amp; Networking
          </a>
          <a href="#ModelHeader" className="portfolio-cta-btn4">
            3-D Modeling &amp; Printing
          </a>
          <a href="#coding" className="portfolio-cta-btn5">
            Coding
          </a>
          <a href="#TinkeringHeader" className="portfolio-cta-btn6">
            Tinkering
          </a>
        </div>
      </div>
      <div id="IRECHeader" className="portfolio-i-r-e-c-header">
        <h1 className="portfolio-text">
          <span>IREC</span>
          <br></br>
          <br></br>
        </h1>
      </div>
      <div className="portfolio-i-r-e-c-online">
        <div className="portfolio-container03">
          <div className="portfolio-container04">
            <div className="portfolio-container05">
              <a
                href="https://www.flux.ai/starbug"
                target="_blank"
                rel="noreferrer noopener"
                className="portfolio-link08"
              >
                <h1 className="portfolio-text04">Space Port America Cup</h1>
              </a>
              <span>
                <span>
                  The Rowan University&apos;s Intercollegiate Rocket Engineering
                  Competition (IREC) team
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>plans on </span>
                <span>
                  participating in the Space Port America Cup in New Mexico.
                </span>
              </span>
            </div>
            <div className="portfolio-container06">
              <a
                href="https://spaceportamericacup.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="portfolio-link09"
              >
                <img
                  alt="image"
                  src="/playground_assets/spaeportamercup-200h.webp"
                  className="portfolio-image02"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-i-r-e-c-project-manager">
        <svg viewBox="0 0 1024 1024" className="portfolio-icon02">
          <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
        </svg>
        <div className="portfolio-container07">
          <div className="portfolio-container08">
            <h2 className="portfolio-text10">IREC Project Manager</h2>
            <h2 className="portfolio-text11">Sept 2021 - June 2023</h2>
          </div>
          <span>
            From September 2021 till June 2023, I served as the project manager
            from Rowan University&apos;s  Intercollegiate Rocket Engineering
            Competition. In this position I lead a team of 16 Mechanical, and
            Electrical Engineers to construct a 9ft tall rocket for the 10,000ft
            COTS category.
          </span>
        </div>
      </div>
      <div id="ECADHeader" className="portfolio-e-c-a-d-p-c-b-header">
        <h1 className="portfolio-text13">
          <span>ECAD &amp; PCB</span>
          <br></br>
          <br></br>
        </h1>
      </div>
      <div className="portfolio-e-c-a-d-online">
        <div className="portfolio-container09">
          <div className="portfolio-container10">
            <div className="portfolio-container11">
              <a
                href="https://www.flux.ai/starbug"
                target="_blank"
                rel="noreferrer noopener"
                className="portfolio-link10"
              >
                <h1 className="portfolio-text17">Flux</h1>
              </a>
              <span>
                <span>
                  Flux is a new ECAD software to provides users with the ability
                  to work cooperatively on ECAD designs. 
                </span>
                <br></br>
                <span>
                  Similar to Google docs. I have started using this software
                  in-between classes to work on smaller projects
                </span>
              </span>
            </div>
            <div className="portfolio-container12">
              <a
                href="https://www.flux.ai/starbug"
                target="_blank"
                rel="noreferrer noopener"
                className="portfolio-link11"
              >
                <img
                  alt="image"
                  src="/playground_assets/fluxlogo-200h.jpg"
                  className="portfolio-image03"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-weather-sensor">
        <svg viewBox="0 0 1024 1024" className="portfolio-icon04">
          <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
        </svg>
        <div className="portfolio-container13">
          <div className="portfolio-container14">
            <h2 className="portfolio-text22">Weather Sensor</h2>
            <h2 className="portfolio-text23">
              Fall 2021
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
          </div>
          <span>
            My first ECAD design created for my Rowan University Intro to
            Embedded Systems. Designed in DipTrace to use the MSP430 20-pin chip
            from Texas Instruments. It was printed from PCBway, programmed in C
            using code composer, and soldered together by hand. It failed due to
            the design of the battery power system.
          </span>
        </div>
      </div>
      <div className="portfolio-garden-water-controller">
        <img
          alt="image"
          src="/playground_assets/watervalve-600w.jpg"
          className="portfolio-image04"
        />
        <div className="portfolio-container15">
          <div className="portfolio-container16">
            <h2 className="portfolio-text25">Water Valve Controller</h2>
            <h2 className="portfolio-text26">On-going</h2>
          </div>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem
            lorem, malesuada in metus vitae, scelerisque accumsan ipsum.
          </span>
        </div>
      </div>
      <div className="portfolio-light-controlled-blinds">
        <svg viewBox="0 0 1024 1024" className="portfolio-icon06">
          <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
        </svg>
        <div className="portfolio-container17">
          <div className="portfolio-container18">
            <h2 className="portfolio-text28">Light Blinds Controller</h2>
            <h2 className="portfolio-text29">On-going</h2>
          </div>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem
            lorem, malesuada in metus vitae, scelerisque accumsan ipsum.
          </span>
        </div>
      </div>
      <div id="SerNetHeader" className="portfolio-server-and-networking-header">
        <h1 className="portfolio-text31">
          <span>Servers &amp; Networking</span>
          <br></br>
        </h1>
      </div>
      <div className="portfolio-personal-server">
        <img
          alt="image"
          src="/playground_assets/serverpic-300h.jpg"
          className="portfolio-image05"
        />
        <div className="portfolio-container19">
          <div className="portfolio-container20">
            <h2 className="portfolio-text34">Personal Server</h2>
            <h2 className="portfolio-text35">Construction Dec 2022</h2>
          </div>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem
            lorem, malesuada in metus vitae, scelerisque accumsan ipsum.
          </span>
        </div>
      </div>
      <div className="portfolio-n-a-s">
        <svg viewBox="0 0 1024 1024" className="portfolio-icon08">
          <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
        </svg>
        <div className="portfolio-container21">
          <div className="portfolio-container22">
            <h2 className="portfolio-text37">Network Assisted Storage</h2>
            <h2 className="portfolio-text38">
              <span>Implemented Spring 2023</span>
              <br></br>
            </h2>
          </div>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem
            lorem, malesuada in metus vitae, scelerisque accumsan ipsum.
          </span>
        </div>
      </div>
      <div id="ModelHeader" className="portfolio-model-print-header">
        <h1 className="portfolio-text42">
          <span>3-D Modeling &amp; Printing</span>
          <br></br>
        </h1>
      </div>
      <div className="portfolio-model-print-online">
        <div className="portfolio-footer">
          <div className="portfolio-container23">
            <div className="portfolio-contact-information">
              <h1>OnShape</h1>
              <span>
                <span>
                  OnShape is an online 3D modeling software that allows for easy
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  sharing and  demonstration of 3-D models and designs.
                </span>
              </span>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/onshapelogo-200h.png"
            className="portfolio-image06"
          />
        </div>
      </div>
      <div className="portfolio-automoblox">
        <svg viewBox="0 0 1024 1024" className="portfolio-icon10">
          <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
        </svg>
        <div className="portfolio-container24">
          <div className="portfolio-container25">
            <h2 className="portfolio-text50">Auto-Cad Automoblox</h2>
            <h2 className="portfolio-text51">Fall 2015</h2>
          </div>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem
            lorem, malesuada in metus vitae, scelerisque accumsan ipsum.
          </span>
        </div>
      </div>
      <div id="coding" className="portfolio-coding-header">
        <h1 className="portfolio-text53">
          <span>Coding</span>
          <br></br>
        </h1>
      </div>
      <div className="portfolio-coding-online">
        <div className="portfolio-container26">
          <div className="portfolio-container27">
            <div className="portfolio-container28">
              <a
                href="https://github.com/millar38"
                target="_blank"
                rel="noreferrer noopener"
                className="portfolio-link12"
              >
                <h1 className="portfolio-text56">
                  <span>Git-Hub</span>
                  <br></br>
                  <br></br>
                </h1>
              </a>
              <span>Through my college career I ha</span>
            </div>
            <div className="portfolio-container29">
              <a
                href="https://github.com/millar38"
                target="_blank"
                rel="noreferrer noopener"
                className="portfolio-link13"
              >
                <img
                  alt="image"
                  src="/playground_assets/githublogo-200h.png"
                  className="portfolio-image07"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-java">
        <svg viewBox="0 0 1024 1024" className="portfolio-icon12">
          <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
        </svg>
        <div className="portfolio-container30">
          <div className="portfolio-container31">
            <h2 className="portfolio-text61">Java GUI</h2>
            <h2 className="portfolio-text62">Fall 2015 - Spring 2016</h2>
          </div>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem
            lorem, malesuada in metus vitae, scelerisque accumsan ipsum.
          </span>
        </div>
      </div>
      <div id="TinkeringHeader" className="portfolio-tinkering-header">
        <h1 className="portfolio-text64">
          <span>Tinkering</span>
          <br></br>
        </h1>
      </div>
      <div className="portfolio-personal-computer">
        <img
          alt="image"
          src="/playground_assets/pcpic-600w.jpg"
          className="portfolio-image08"
        />
        <div className="portfolio-container32">
          <div className="portfolio-container33">
            <h2 className="portfolio-text67">Personal Computer</h2>
            <h2 className="portfolio-text68">Dec 2020</h2>
          </div>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem
            lorem, malesuada in metus vitae, scelerisque accumsan ipsum.
          </span>
        </div>
      </div>
      <div className="portfolio-switch-party">
        <img
          alt="image"
          src="/playground_assets/cfwswitch-300h.jpg"
          className="portfolio-image09"
        />
        <div className="portfolio-container34">
          <div className="portfolio-container35">
            <h2 className="portfolio-text70">CFW on Nintendo Switch</h2>
            <h2 className="portfolio-text71">Spring 2022</h2>
          </div>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem
            lorem, malesuada in metus vitae, scelerisque accumsan ipsum.
          </span>
        </div>
      </div>
      <div className="portfolio-footer-container">
        <div className="portfolio-footer1">
          <div className="portfolio-social-links">
            <a
              href="https://www.linkedin.com/in/daniel-millar-782393223/"
              target="_blank"
              rel="noreferrer noopener"
              className="portfolio-link14"
            >
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="portfolio-linked-in-icon"
              >
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/dan_millar814/"
              target="_blank"
              rel="noreferrer noopener"
              className="portfolio-link15"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="portfolio-instagram-icon"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
          </div>
          <div className="portfolio-contact-information1">
            <div className="portfolio-location-1">
              <div className="portfolio-email">
                <svg viewBox="0 0 1024 1024" className="portfolio-icon16">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <span className="Section-Text">dmillar2001@gmail.com</span>
              </div>
              <div className="portfolio-phone">
                <svg
                  viewBox="0 0 804.5714285714286 1024"
                  className="portfolio-icon18"
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

export default Portfolio
