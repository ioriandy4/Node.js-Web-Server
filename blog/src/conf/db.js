const dev = process.env.NODE_ENV
// const dev = 'dev'

let MYSQL_CONF,
    REDIS_CONF;

if (dev === 'dev') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'qqa5458472',
        port: '3306',
        database: 'nodeblog'
    }

    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    }
}

if (dev === 'production') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'qqa5458472',
        port: '3306',
        database: 'nodeblog'
    }

    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    }
}
console.log(REDIS_CONF)
module.exports = {
    MYSQL_CONF,
    REDIS_CONF
}