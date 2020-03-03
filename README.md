# Micro Front End PoC

## Usage

```sh
npm install
```

## Start web server
```sh
npm start
```

## Project Description

This repo is broken down into 4 projects
1. App
2. Fragment Module One
3. Fragment Module Two
4. Fragment Module Three

**App** is responsible for layout and rendering fragment modules

**Fragments** are single purpose mini apps that receive parameters via query strings and events. Events are based off a Pub/Sub model documented in the fragment README.

## Messaging

### send(message: string)
```js
window.messaging.send("module-one-button-click")
```

### send(message: object)
```js
window.messaging.send({event: "module-two-button-click", payload: "buy"})
```

### subscribe(eventName, callback())
```js
window.messaging.subscribe("module-one-button-click", function(){
    console.log("Module Two Received Module One Event");
})
```

### subscribe(eventName, callback(data))
```js
window.messaging.subscribe("module-two-button-click", function(data) {
    console.log(data); // buy
})
```
