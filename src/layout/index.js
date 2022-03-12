import React from 'react'
import "./global.scss"
import Header from '../components/Header'

export default function Layout(props) {
  return (
    <div>
      <div><Header /></div>
      <div>{props.children}</div>
    </div>
  )
}
