// var promise = new Promise(function(fulfill,reject){
// 	setTimeout(function(){
// 		fulfill("FULFILLED")
// 	}, 300);
// })



// var promise = new Promise(function(fulfill,reject){

// setTimeout(() => {
//   console.log(result);
// }, 300);})


// const wait = ms => new Promise((fulfill, reject) => setTimeout(fulfill, ms));
// wait(300).then(() => console.log('FULFILLED!'));


var promise = new Promise(function (fulfill, reject) {
      

      setTimeout(function () {
        fulfill('FULFILLED!');
      }, 300);
    });

    promise.then(console.log);