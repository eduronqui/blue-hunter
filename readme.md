# Blue Hunter

Problem Description
------

Have an API that implements the three routes bellow:

[GET] /user/by-name/:name

[GET] /book/by-title/:title

[GET] /user/by-author/:author

Build & Run
------

API is fully packed in docker containers, from you terminal run:

```bash
$ docker-compose up
```

It will run the MongoDB container, build and run the Node.js container with the app and link both containers. On first execution, a seed method will run and populate MongoDB.

After that, you should be able to reach the api by calling it from `http://localhost:3000`. 

In case you prefer running the api outside of a docker environment, then you should have an environmet variable called _MONGODB_ containing your MongoDB IP address, then you run:

```bash
$ npm install
$ npm start
```

All set! When the application is up you'll be able to reach it by `http://localhost:3000`.

Structure
------

API is structured in a MVC-like pattern, inside _app_ folder, you will find the following structure:

```
app
  + controllers
    // controllers that handles requests
  + models
    // database schema definitions and parsing
  + routers
    // api routes distribution methods
  + seed
    // seed in case you're running on a new environment
```

This structure was chosen due to it's simplicity and maintainability and as it does not have several layers and lots of indirect calls it offers fast responses.