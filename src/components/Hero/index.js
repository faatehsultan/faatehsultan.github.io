import React from "react";
import * as styles from "./style.module.scss"
import Typewriter from 'typewriter-effect';
import { HERO_TITLES } from "../../../constants";
import { StaticImage } from "gatsby-plugin-image"

export default function Hero() {
  return (
    <div className={styles.Hero + " min-h-100-vh"}>
      <div className="container min-h-100-vh">
        <div className="row flex-column-reverse flex-md-row align-items-center justify-content-center h-100">
          <div className="col-12 col-md-8">
            <div className="display-4 text-center text-md-start">
              <Typewriter
                options={{
                  strings: HERO_TITLES.map(i => "I'm a ".concat(i)),
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <br />
            <br />
            <div className="d-flex flex-column flex-md-row justify-content-start align-items-center gap-4">
              <button className="btn btn-primary shadow px-5">Contact Me <i className="bi bi-envelope-fill ms-2"></i></button>
              <button className="btn btn-dark shadow px-5">Check out my work <i className="bi bi-arrow-down ms-1"></i></button>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div>
              <StaticImage src="../../images/dp1.jpg" alt="avatar" className={styles.avatarImg + " shadow rounded-circle"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

