var promise = new Promise(function (fulfill, reject) {
setTimeout(function () {
        reject(new Error('REJECTED!'))
      }, 300);
    });
function onReject (error){
	console.log(error.message)
}
promise.then(null,onReject)




// let p = new Promise( fulfill, reject) => {
//     setTimeout( () => resolve('resolved data'),300);
// })

// p.then(response => console.log(response))
// .catch(error => console.log(error));
//Promise.reject(new Error('REJECTED')).then(fulfill, rejected);
// console.log(p);