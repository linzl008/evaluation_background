const mongo = require('../config/mongo')
exports.set = function(req,rsp,next) {
    mongo.getDb((err,db) =>{
        let collection = db.collection(mongo.collectionNames.baseSituation)
        collection.update(
            req.body.filter,
            {$set: req.body.context},
            true
        )
        rsp.send({code:'0000',msg:'baseSituation set success'})
    })
}
exports.get = function(req,rsp,next) {
    mongo.getDb((err,db) => {
        
    })
}
