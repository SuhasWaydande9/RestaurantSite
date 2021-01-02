import React from "react"
import "./MainContainer.scss"

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
        <div className="TheOrder">
          <button>
            <a href={"/products/" + props.id}>Order</a>
          </button>
        </div>
        <p className="AboutDish">{props.children}</p>
      </div>
    </div>
  )
}

export default class MainContainer extends React.Component {
  render() {
    return (
      <div path="/" className="Main-Container-Explore">
        {this.props.data ? (
          this.props.data.map(TheDish => {
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
        ) : (
          <div>NO PRODUCTS FOUND</div>
        )}
      </div>
    )
  }
}
