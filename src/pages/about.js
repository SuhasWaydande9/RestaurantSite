import React, { Component } from "react"
import Header from "../components/Header/Header.js"
import AboutPage from "../components/AboutDir/AboutContainer.js"

export default class about extends Component {
  render() {
    return (
      <div>
        <Header />
        <AboutPage />
      </div>
    )
  }
}
