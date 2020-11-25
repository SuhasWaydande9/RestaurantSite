// const path = require(`path`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   // Query for markdown nodes to use in creating pages.
//   // You can query for whatever data you want to create pages for e.g.
//   // products, portfolio items, landing pages, etc.
//   // Variables can be added as the second function parameter
//   return graphql(
//     `
//       {
//         allFoodDataJson {
//           edges {
//             node {
//               id
//               img
//               name
//               price
//               about
//             }
//           }
//         }
//       }
//     `
//   ).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }

//     // Create blog post pages.
//     result.data.allMarkdownRemark.edges.forEach(edge => {
//       createPage({
//         // Path for this page — required
//         path: `/ThatDish/${edge.node.id}`,
//         component: path.resolve("src/pages/ThatDish.js"),
//         context: {
//           // Add optional context data to be inserted
//           // as props into the page component..
//           //
//           // The context data can also be used as
//           // arguments to the page GraphQL query.
//           //
//           // The page "path" is always available as a GraphQL
//           // argument.
//         },
//       })
//     })
//   })
// }

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
