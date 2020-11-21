import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header/Header.js"
import MainContent from "../components/ExploreDir/MainContainer.js"

export default class explore extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Header />
        <MainContent data={this.props.data.allFoodDataJson.edges} />
      </div>
    )
  }
}

export const query = graphql`
  {
    allFoodDataJson {
      edges {
        node {
          id
          img
          name
          price
          about
        }
      }
    }
  }
`
