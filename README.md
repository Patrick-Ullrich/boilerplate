Based on TurboRepo Kitchen Sing Starter

### Apps and Packages

- `api`: localhost:3000 - an [NestJS](https://nestjs.com/) server
- `app`: localhost:3001 - a [Next.js](https://nextjs.org) app
- `ui`: a [Chakra-UI](https://chakra-ui.com/) based design system
- `scripts`: Jest and eslint configurations
- `tsconfig`: tsconfig.json;s used throughout the monorepo

Each package and app is 100% [Typescript](https://www.typescriptlang.org/).

If you are running the postgres database using the `docker-compose.yml` file, you will need to add to the API `.env` file:
`DATABASE_URL="postgresql://postgres:postgres@localhost:5432/boilerplate?schema=public"`

### Scripts

- `yarn` - install dependencies
- `yarn build` - build the monorepo
- `yarn test` - run tests
- `yarn dev` - run projects

### Utilities

This turborepo has some additional tools already setup for you:

- [Typescript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting

### ToDos

- [x] yarn dev running NestJS 3000, NextJS 3001
- [x] yarn test running tests in all projects correctly
- [ ] Generate API schema with PrismaJS
- [ ] Share Types between API and Front End
