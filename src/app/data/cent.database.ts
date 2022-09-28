import Database from "@centjs/data";

/**
 * SQL Server Database Connection Configurations,
 * setting that content of database cofigurations in .env file
 * @example
 * MSSQL_CONFIG_SERVER=localhost
 * MSSQL_CONFIG_USERNAME=centadmin
 * MSSQL_CONFIG_PASSWORD=qwrtsr4321
 * MSSQL_CONFIG_DBNAME=db_greetings
 */
export const MSSQLDB = new Database({
  provider: "sqlserver",
  config: {
    server: process.env.MSSQL_CONFIG_SERVER,
    user: process.env.MSSQL_CONFIG_USERNAME,
    password: process.env.MSSQL_CONFIG_PASSWORD,
    database: process.env.MSSQL_CONFIG_DB_NAME,
    options: {
      encrypt: false,
      trustServerCertificate: true,
    },
    pool: {
      idleTimeoutMillis: 30000,
      max: 10,
      min: 1,
    },
  },
});

/**
 * MYSQL Database Connection Configurations,
 * setting that content of database cofigurations in .env file
 * @example
 * MYSQL_CONFIG_SERVER=localhost
 * MYSQL_CONFIG_USERNAME=centadmin
 * MYSQL_CONFIG_PASSWORD=qwrtsr4321
 * MYSQL_CONFIG_DBNAME=db_greetings
 */

export const MYSQLDB = new Database({
  provider: "mysql",
  config: {
    host: process.env.MYSQL_CONFIG_SERVER,
    user: process.env.MYSQL_CONFIG_USERNAME,
    password: process.env.MYSQL_CONFIG_PASSWORD,
    database: process.env.MYSQL_CONFIG_DBNAME,
  },
});
