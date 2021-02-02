# healthy-families-healthy-futures

## Development

### Setup

1. Run `yarn install`
2. Setup development environment variables by running `yarn secrets`

- You will be prompted for a password. Ask your EM to send it to you.
- **NOTE**: Windows users need to run `yarn secrets:login` and `yarn secrets:sync` instead

3. Run `yarn start`

4. Gatsby will run a development server at `localhost:8000`, complete with hot reloading

### Commands

- `yarn start` - starts the development server at `localhost:8000`
- `yarn build` - builds the project and outputs into `public/`
- `yarn clean` - runs [`gatsby clean`](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#clean) to fix weird issues with the development server
- `yarn lint` - runs eslint/prettier
- `yarn secrets` - syncs secrets from BitWarden

### TypeScript

This codebase heavily features TypeScript, a superset of JavaScript that adds static typing to the language. This helps catch bugs at compile-time (typos, null checking, etc.) If you know how to write JavaScript, you can start writing TypeScript by changing `.js` and `.jsx` to `.ts` and `.tsx`!

To fully utilize the power of TypeScript, you will have to learn its [type system](https://learnxinyminutes.com/docs/typescript/). Use [this](https://github.com/typescript-cheatsheets/react/blob/main/README.md#section-2-getting-started) as a cheat sheet for using TypeScript with React.

While you are encouraged to use TypeScript, you **don't** have to. Our codebase can be a mix of both TypeScript and JavaScript.

### Other Notes

- Use `[NAME]/[ISSUE_NUMBER]-[SHORT_DESCRIPTION]` to label your feature branches

- Set up "Format on Save" on VSCode to save time

- Run lint often

## Deployment

This repository is set up with [Netlify](https://www.netlify.com/), which creates preview deployments on every PR and deploys to the [main deployment site](https://healthy-families-healthy-futures.netlify.app/) on pushes to `main`.

## Stack

- React.js - frontend components
- Gatsby - static site generation
- Contentful - content management
- eslint - linting
- prettier - formatting
- yarn - package management

## Project Structure

- [`src/`](src): Contains _almost all_ of our front-end code. This is where we put our React components, Gatsby pages, and styles. It has four sub-folders:
  - [`components/`](src/components): Contains reusable React components
  - [`css/`](src/css): Contains CSS modules for components and pages
  - [`pages/`](src/pages): Contains top-level page components
  - [`utils/`](utils): Contains miscellaneous code
- [`static/`](static): Stores static files like fonts or the favicon.

- [`gatsby-config.ts`](config.ts): Not a directory, but a file that defines plugins and other config for Gatsby (see [Gatsby doc](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/))
