# todo-kouroh
A CRUD backend app for a Todo list with google sign up

# Running the App
To run the app, create the database with a password of "password" and name of "todo"
Then run "docker compose up"

The app is locally ran on the port 3000.
To use the app, first route to: 

'login' (http://localhost:3000/login)

Where you will be asked to login using your gmail account. Upon a succesful login a jwt token is returned. You need to pass this token as the authorisation header to be able to access the other APIs.

The todo APIs are all linked behind the 
'todo' name and include:

POST 'todo/create' - creates a todo item with a description

PUT 'todo/update/:id' - updates a todo item

PUT 'todo/completed/:id' - automatically sets the passed todo id status as completed

GET 'todo/list' - returns a list of all todos in the database that have not been deleted

GET 'todo/list/:id' - returns a specific todo based on the ID

PUT 'todo/delete/:id' - automatically deletes a todo by setting its is_delete column as true

DELETE 'todo/delete/permanent/:id' - actually fully deletes the row of data from the database

# Testing the App
To test the app, run "npm run test" - Work In Progress

# Building the App
To instead run the app locally and not use docker

Create the database first with a password of "password" and a database name of "todo"

The app can be natively run by first running "npm install" and then "npm run start"

You can follow the same list of APIs above