// app.js
const mysql = require('promise-mysql');
var connection;


mysql.createConnection({
    host: 'mysql1',
    user: 'root',
    password: 'rootpassme',
    database: 'sitepoint'
}).then( (conn) => {
    connection = conn;
    return connection.query('select * from employees');
}).then( (rows) => {
    for (var i in rows) {
        console.log(rows[i].name + " " + rows[i].location);
    }
    connection.end();
}).catch((error) => {
    if (connection && connection.end) connection.end();
    //logs out the error
    console.log(error);
});


