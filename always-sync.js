var promise = new Promise(function (fulfill, reject){
        fulfill("PROMISE VALUE")
	promise.then(null,console.log)        
})
console.log("MAIN PROGRAM")
promise.then(console.log)