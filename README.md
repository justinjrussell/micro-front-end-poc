# Micro Front End PoC

## Overview

This repo is broken down into 4 projects and a server
1. App
2. Fragment Module One
3. Fragment Module Two
4. Fragment Module Three
5. Server

**App** is responsible for layout and rendering fragment modules.

**Fragments** are single purpose mini apps that receive parameters via query strings and events. Events are based off a Pub/Sub model documented in the fragment README.

**Server** is responsible all web request for app, fragments and microservice api's.


## Usage

### Install dependencies
```sh
npm install
```

### Start web server
```sh
npm start
```

## Messaging

### send(event: string)
```js
window.messaging.send("module-one-button-click")
```

### send(event: object)
```js
window.messaging.send({event: "module-two-button-click", payload: "buy"})
```

### subscribe(event, callback())
```js
window.messaging.subscribe("module-one-button-click", function(){
    console.log("Module Two Received Module One Event");
})
```

### subscribe(event, callback(data))
```js
window.messaging.subscribe("module-two-button-click", function(data) {
    console.log(data); // buy
})
```
