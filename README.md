# FixBot CRUD Operation Test

> a backend server that creates, updates, read and delete car's data which include telemetrics, owner, license number, model etc. Built with nodeJS, expressJS, mongodb and mongoose.

- registers a new car with its data
- displays all the registered cars with it's data in the database
- updates the car's data in the database
- deletes a specified car's data 


## Usage

### ES Modules in Node

We use ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and setup Babel if you would like

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development (if app is ready for production, the value should be production)
PORT = 8008
MONGO_URI = your mongodb uri (from the mongodb database created)

```

### Install Dependencies

```
npm install

```

### Run

```
# Run the app with nodemon for development (:8008) (reloading when a change is detected in the code)
npm run dev

# Run the app without nodemon (load once and stops even if there's change in the code)
npm start

```
