import React from "react"
import "./MainContainer.scss"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

let DishCard = props => {
  return (
    <div className="Dishes-Card" key={props.id}>
      <div
        className="Dish-Image"
        style={{ backgroundImage: "url(" + props.img + ")" }}
      ></div>
      <div className="Dish-Details">
        <div className="TheDish">
          <p className="DishName">{props.name}</p>
          <p className="DishPrice">{props.price} Rs/-</p>
        </div>
        <p className="AboutDish">{props.children}</p>
        <div className="TheOrder">
          <button>
            <a href={"/products/" + props.id}>Order</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default class MainContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <div className="Main-Container-Explore">
              {this.props.data
                ? this.props.data.map(TheDish => {
                    return (
                      <DishCard
                        img={TheDish.node.img}
                        name={TheDish.node.name}
                        id={TheDish.node.id}
                        key={TheDish.node.id}
                        price={TheDish.node.price}
                        OrderHandle={this.handleOrder}
                      >
                        {TheDish.node.about}
                      </DishCard>
                    )
                  })
                : null}
            </div>
          </Route>
          {/* <Route path="/:id">
          </Route> */}
        </Switch>
      </Router>
    )
  }
}
