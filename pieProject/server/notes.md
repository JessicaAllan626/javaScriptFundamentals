npm (Node Package Manager)- can manage packages that are local dependencies of a particular project 

npm start- this command looks into the root dircetory of our project and looks for the script object. If it finds it, it will look for the matching keyword(in this case, it's "start") then runs the following command script

npm dev- this indicates that we are running our project in development mode and that we are using 'nodemon' to do that. Nodemon allows us to make changes to our server without having to restart it manually everytime we make a change 

node_modules- packages that npm installs that allow our application and all of its dependencies to run properly 

package-lock.json- simply locks in the version of the packages that we are using in a specific project. We get this file so that anyone who clones our project and tries to run it will have the exact same version of the packages that we use

MVC- model view controller

Express- a framework that used to help us organize our server into MVC architecture

ORM (object relational mapping)- code library that automates the transfer of data in a database into objects that are more commonly used in application (like JSON)

Sequelize- a JS library that we will use to manage our postgreSQL databases

Models- how we shape the data that we will be sending to our databases

pg- a package that allows us to write in the dialect that sequelize needs to speak to our PostgreSQL database

pg-hstore- a package that allows us to access more advanced and complex pieces of code regarding PostgreSQL

