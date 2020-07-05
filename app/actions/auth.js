const DB = require('./db');
// const  = require('bluebird');



//canst db = require('./db');

class Auctions {
    constructor(){
        this.dbConnected = new DB();
    }

    signup = async () => {
        return 'signout';
        }
        
        login = async () => {
            return 'login';
        }
        
        logout = async () => {
            return await this.dbConnected.get();
        }
        getUser = async (...args) => {
            return await this.dbConnected.get(...args);
        }
}

module.exports = Auctions;