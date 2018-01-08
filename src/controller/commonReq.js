const mongo = require('../config/mongo')
exports.solve = function(req,rsp,next) {

    if(req.body.cmd === 'set') {
        set(req,rsp,next);
    }else if(req.body.cmd === 'get') {
        get(req,rsp,next);
    }
}

function set (req,rsp,next) {
    mongo.getDb((err,db) =>{
        db.createCollection(req.body.tableName,(err,collection) => {
            //let collection = db.collection(req.body.tableName);
            collection.update(
                req.body.filter,
                {$set: req.body.context},
                {upsert:true},
                (err,result) =>{
                    if(err){
                        console.log(err);
                    }
                    rsp.send({code:'0000',msg:`${req.body.tableName} ${req.body.cmd} success!`});
                }
            )
        })
    })
}

function get (req,rsp,next) {
    mongo.getDb((err,db) => {
        db.createCollection(req.body.tableName,(err,collection) => {
            //let collection = db.collection(req.body.tableName);
            collection.find(req.body.filter).toArray((err,docs) => {
                rsp.send({code:'0000',msg:docs});
            })
        })
    })
}