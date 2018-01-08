exports.create = function(count,rsp,logger) {
    let curr = 0;
    let ret = {};
    return {
        collect(key,value) {
            ret[key] = value;
            curr++;
            if(curr === count){
                console.log(logger);
                rsp.send({code:'0000',msg:ret});
            }
        }
    }
}