const { Result } = require("postcss");

// exports.createPages = ({ actions: { createPage } }) => {
//    const products = require(`./data/products.json`);
//    products.forEach(product =>{
//        createPage({
//            path: `/product/${product.slug}/`,
//            component: require.resolve(`./src/templates/product.js`),
//            context: {
//                title: product.title,
//                description: product.description,
//                image: product.image,
//                price: product.price,
//            },
//        })
//    })
// }


// exports.createPages = async ({ actions: {createPage}, graphql }) => {
//     constant results = await graphql(`
//     {
//         allProductsJson {
//           edges {
//             node {
//               slug
//             }
//           }
//         }
//       }      
//     `);

//     if (results.error) {
//         console.error("Nesto nije u redu!");
//         return;
//     }


// export results.data.allProductsJson.edges.forEach( edge => {
//     const product = edge.node;

//     createPage( {
//         path: `/product/${product.slug}/`,
//         component: require.resolve(`./src/templates/product-graphql.js`),
//         context: {
//             slug: product.slug,
//         },
//     } )
// })
// }
