# 📚 Books API

An API for a books management application

## 🎁 What's inside?

This Turborepo includes the following packages/apps:

### 📦 Apps and Packages

- `fastify` application for backend API
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### 🛠️ Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### 🏗️ Build

To build all apps and packages, run the following command:

```
pnpm build
```

### ⚡️ Develop

To develop all apps and packages, run the following command:

```
pnpm dev
```

### 🌿 Commit standards

This repository follows the Conventional Commits specification for writing commit messages. Conventional Commits provide a standardized convention for creating meaningful and consistent commit messages.

Commit Message Format
Each commit message adheres to the following format:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

- Type: Describes the purpose of the commit (e.g., feat, fix, chore, docs).
- Scope: Specifies the module, component, or section of the project affected by the commit.
- Description: A concise summary of the changes made in the commit.
- Body: Additional information about the commit, if necessary.
- Footer: Additional metadata, such as issue tracker references.

### Example Commit Messages

feat(user-auth): add password reset functionality
fix(api): resolve issue with data serialization
chore(tests): update test suite for improved coverage
docs(readme): update Conventional Commits section
