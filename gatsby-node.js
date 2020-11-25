const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(
    `
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
  )
  const productTemplate = path.resolve(`src/templates/ThatDish.js`)
  queryResults.data.allFoodDataJson.edges.forEach(node => {
    createPage({
      path: `/products/${node.node.id}`,
      component: productTemplate,
      context: {
        // This time the entire product is passed down as context
        product: node.node,
      },
    })
  })
}
