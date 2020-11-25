import React from "react"
import "./AboutPage.scss"

const AboutPage = props => {
  return (
    <div className="AboutContainer">
      <img src="/PngItem_1961197.png" alt="ReasaurantSite Image"></img>
      <div className="About-Content">
        <h2>About Me</h2>
        <p>
          Hello Everyone. My Name Is Suhas Waydande And I am a Web Developer. I
          Make Websites, Webapps, Backend Servers, Custom Chat Apps, Custom
          Application, Frontend Prototypes, Web Designs, Databse Middlewares,
          APIs and Much More. This is a Prototype Page of a Restaurant Site. I
          will Provide My Contact Info And Portfolio site in Contact Section.
        </p>
      </div>
      <div className="Contact Info">
        <h3>Contact Me</h3>
        <div className="SocialLinks">
          <div>
            <p>Social Media</p>
            <li>
              <a
                href="https://www.facebook.com/suhas.waydande.75"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/suhas_waydande_97/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://in.linkedin.com/in/suhas-waydande-0758391a0"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </div>
          <div>
            <p>Business Accounts</p>
            <li>
              <a
                href="https://github.com/SuhasWaydande9"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.fiverr.com/mr_dev_sam"
                target="_blank"
                rel="noreferrer"
              >
                Fiver
              </a>
            </li>
          </div>
        </div>
        <p
          style={{ textAlign: "center", fontSize: "11px", paddingTop: "20px" }}
        >
          Copyright&#169;SuhasWaydande
        </p>
      </div>
    </div>
  )
}

export default AboutPage
