import React, { Component } from "react"
import "./ThatDish.scss"
import Header from "../components/Header/Header.js"

function Product({ pageContext }) {
  function handleClick() {
    alert("This is a Prototype Page, Not Fully Functional")
  }
  return (
    <div className="Product-Details">
      <p className="ProductHeaderName">{pageContext.product.name}</p>
      <p className="ProductPrice">Price : {pageContext.product.price}.00 Rs</p>
      <div>
        <label style={{ paddingRight: "15px" }}>Quantity</label>
        <input
          style={{ padding: "0px 10px" }}
          defaultValue="1"
          type="number"
          min="0"
        ></input>
      </div>
      <div className="ProductButtons">
        <button style={{ backgroundColor: "#ff8b8b" }}>
          <a onClick={handleClick}>Pay Now</a>
        </button>
        <button style={{ backgroundColor: "lightblue" }}>
          <a href="/explore">Explore</a>
        </button>
      </div>
    </div>
  )
}

export default class ThatDish extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <div className="MainContainer">
          <div className="TheProduct">
            <div className="ProductInfo">
              <img
                alt={this.props.pageContext.product.name}
                src={this.props.pageContext.product.img}
              ></img>
              <p>{this.props.pageContext.product.about}</p>
            </div>
            <Product pageContext={this.props.pageContext} />
          </div>

          {/* <div className="CartSystem"></div> */}
        </div>
      </React.Fragment>
    )
  }
}
