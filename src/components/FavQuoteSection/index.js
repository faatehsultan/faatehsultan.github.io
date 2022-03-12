import React from 'react'
import * as styles from "./style.module.scss"

export default function FavQuoteSection() {
  return (
    <div className={styles.FavQuoteSection + " bg-light text-dark p-5"}>
      <div className="container shadow my-3 py-5 px-5 bg-white d-flex flex-column justify-content-center align-items-center" style={{ borderRadius: "18px" }}>
        <div style={{ height: "2px", width: "65%", backgroundColor: "gray" }}></div>
        <div className="text-center fs-5 fw-bold fst-italic my-5">
          The Most Dangerous Thing You Can Do In This Life Is To Play It Safe.
        </div>
        <div style={{ height: "2px", width: "50%", backgroundColor: "gray" }}></div>
      </div>
    </div>
  )
}
