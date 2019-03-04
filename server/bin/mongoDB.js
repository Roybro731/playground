const mongoClient = require('mongodb').MongoClient;

const host = `localhost`;
const port = `27017`
const dbName = `playgroundDB`;
const collection = "users";

async function manageDBActions(actionToDo, params, callback) {
    try{
        const client = await mongoClient.connect(`mongodb://${host}:${port}`, {useNewUrlParser: true}); 
        const db = client.db(`${dbName}`) ;
        actionToDo(db, params, (err, result) => {
            client.close();
            return callback(err, result);
        });
    }catch(e){
        //add logger 
        console.log(`There was problem with DB request ${e}`);
    }
}

async function findOneUserInDB(db, user, cb) {
    const result = await db.collection(collection).findOne(user);
    return cb(null, result);
}

async function insertUserToDB(db, user, cb) {
    findOneUserInDB(db, user, async (err, userExist) => {
        if(userExist){
            return cb(new Error('User already exist!'));
        }
        const result = await db.collection(collection).insertOne(user);
        return cb(err, result);
    });
}

async function deleteOneUser(db, user, cb) {
    const result = await db.collection(collection).deleteOne(user);
    return cb(null, result);
}

async function deleteAllUsers(db, params, cb) {
    const result = await db.collection(collection).deleteMany({});
    return cb(null, result);
}

module.exports = {
    findUser: async (user, callback) => {
        manageDBActions(findOneUserInDB, user, callback);
    },

    insertUser: async (user, callback) => {
        manageDBActions(insertUserToDB, user, callback);
    },

    deleteOneUser: async (user, callback) => {
        manageDBActions(deleteOneUser, user, callback);
    },

    deleteAllUsers: async (callback) => {
        manageDBActions(deleteAllUsers, null, callback);
    },
} 