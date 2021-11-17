const mysql = require('mysql');
const fs = require('fs');

try{
    var connection = mysql.createConnection({
        host: "omroncms-dbserver-18032019.mysql.database.azure.com", 
        user: "omroncmsadmin@omroncms-dbserver-staging", 
        password: '<type_password>', 
        database: 'mysql', 
        port: 3306, 
        ssl:{ca:fs.readFileSync('./BaltimoreCyberTrustRoot.crt.pem')}
    });
    
    connection.connect();
     
    connection.query('show tables', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results[0]);
    });
     
    connection.end();
} catch(e) {
    console.log(e);
}
