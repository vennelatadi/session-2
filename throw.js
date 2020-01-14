

// require('es6-promise')
// function parsePromised(s){
// 	return new Promise((res,reject)=>{
// 		try{
// 			JSON.parse(s);
// 		}catch(e){
// 		//	reject(e);
// 			console.log(e.message);
// 		}
// 	})
// }
// parsePromised(process.argv[2]).then(null,console.log);



// // function isValidJSON(text) {
// //   try {
// //     JSON.parse(text);
// //     return true;
// //   } catch {
// //     return false;
// //   }
// // }
// // var promise = doSomethingAync()
// // promise.then(onFulfilled, onRejected)






function parsePromised(json){
	return new Promise((fulfill, reject)=>{
		try{
			fulfill(JSON.parse(json));
		} catch(e){
			reject(e);
		}
	});
}
function onReject(error){
	console.log(error.message);
}
parsePromised(process.argv[2]).then(null,onReject);