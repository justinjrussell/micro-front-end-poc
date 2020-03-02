# Micro Front End PoC

## Usage

```sh
npm install
```

```sh
npm start
```

## Documentation

This repo is broken down into 4 projects
1. App
2. Fragment Module One
3. Fragment Module Two
4. Fragment Module Three

**App** is reponsible for layout and rendering fragment modules

**Fragments** are single purpose mini apps that receive parameters via query strings and events. Events are based off a Pub/Sub model documented in the fragment README.