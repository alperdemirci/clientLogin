const DB = require('./db');



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
            
            const ttt = await this.dbConnected.get()
            return ttt;
        }
}

module.exports = Auctions;