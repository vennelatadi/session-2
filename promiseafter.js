// function first()
// function second()

// var p=new promise(function(fulfill,reject)){
// 	first.fulfill("secret value")
// }
// var p1=new promise(second.p)
// console.log(p1)

first()
    .then(function(resolve){
	 return second(resolve)
})
	.then(function(resolve){
		return onfulfilled(resolve)
})
	function onfulfilled(resolve){
		console.log(resolve)
	}
	


// var firstPromise = first();

//     var secondPromise = firstPromise.then(function (val) {
//       return second(val);
//     });

//     secondPromise.then(console.log);

    // As an alternative to the code above, you could also do this:
    // first().then(second).then(console.log);