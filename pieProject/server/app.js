const chalk = require('chalk');
const Express = require("express");
const app = Express();
require('dotenv').config();
const controllers = require('./controllers')
const dbConnection = require('./db');

app.use('/pies', controllers.pieController);

dbConnection.authenticate()
.then(() => dbConnection.sync()) // => {force: true}{alter: true}
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log
        (chalk.blueBright(`[Server]: App is listening on port ${process.env.PORT}`));
    }) 
})

.catch((err) => {
    console.log(chalk.redBright(`[Server]: Server Yeeted! ${err}`));
})