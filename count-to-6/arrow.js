var input =process.argv.slice(2);
var result=input.map((a)=>{
	return a;
})
var output=input.map((b)=>{
	return b[0];
})

var out="";
output.forEach(elem=>{
	out += elem
})
console.log(`[${input}] becomes "${out}"`);