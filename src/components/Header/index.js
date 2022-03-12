import React from 'react'
import { useState } from 'react'
import { Link } from "gatsby"
import { HEADER_LINKS } from "../../../constants"
import * as styles from "./style.module.scss"

export default function Header() {
  const [showMobileOverlayMenu, setShowMobileOverlayMenu] = useState(false)

  return (
    <div
      className={styles.header + " position-fixed w-100 top-0"}
    >
      <div className="container h-100 d-flex justify-content-evenly align-items-center pb-2">
        <div className="row w-100 align-items-center">
          <div className="col-9 col-md-5 d-flex justify-content-start align-items-center">
            <div className="fs-4 fw-bold">Faateh Sultan / فاتح سلطان</div>
          </div>
          {/* desktop nav */}
          <div className={styles.linksContainer + " col-7 d-none d-md-flex justify-content-end align-items-center gap-4"}>
            {HEADER_LINKS.map((i, index) => (
              <Link href={i.href} key={index}><a className={styles.headeraNav + " fw-bold"}>{i.title}</a></Link>
            ))}
          </div>
          {/* mobile nav */}
          <div className="col-3 d-flex d-md-none justify-content-end">
            <button className="btn btn-dark" onClick={() => setShowMobileOverlayMenu(prev => !prev)}>
              <i className={`bi bi-${showMobileOverlayMenu ? "x" : "list"} fs-5`}></i>
            </button>
          </div>
        </div>
      </div>
      {/* mobile overlay menu */}
      {
        showMobileOverlayMenu && <div className={styles.overlayPage + " d-flex flex-column gap-4 align-items-center justify-content-start d-md-none position-fixed bg-dark h-100-vh w-100 p-4 text-center fs-5 border-top border-primary"} style={{ zIndex: "11" }}>
          {HEADER_LINKS.map((i, index) => (
            <Link href={i.href} key={index}><a className={styles.headeraNav + " fw-bold"}>{i.title}</a></Link>
          ))}
        </div>
      }
    </div >
  )
}

