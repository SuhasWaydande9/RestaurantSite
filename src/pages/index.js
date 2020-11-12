import React from "react";
import Header from "../components/Header/Header.js";
import MainContent from "../components/HomeDir/MainContent/MainContent.js";

export default class index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MainContent />
      </div>
    )
  }
}

