const path = require('path');

const Promise = require('bluebird');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/BlogPost.tsx');
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `,
      ).then(result => {
        if (result.errors) {
          // eslint-disable-next-line no-console
          console.log(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allContentfulBlogPost.edges;
        posts.forEach(post => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          });
        });
      }),
    );
  });
};
