import React from 'react';
import "./MainContent.scss";

function LeftSide() {
  return (
    <div className="LeftSide">
      <div className="in-leftContainer">
        <h1>Sam's Food</h1>
        <p>World's Best Food, <br/> Is Here.</p>
        <PrimaryButton />
      </div>
    </div>
  )
};

function RightSide() {
  return (
    <div className="RightSide">
      <div id="Circle"></div>
      <div id="Dish-Image"></div>
    </div>);
};

function PrimaryButton(){
  return(
    <React.Fragment>
      <button><a href="/Explore">Order Now</a></button>
    </React.Fragment>
  );
}

export default class MainContent extends React.Component {

  render() {
    return <div className="Main-Container">
        <LeftSide />
        <RightSide />
    </div>
  }
}
