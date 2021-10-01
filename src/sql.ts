import mysql from "mysql";

const SqlInstance = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Strong_2540",
});

export default SqlInstance;
