
window.onload = function() {
	console.log('window.onload = function');
	test();
};


// simple const
const foo = "bar";



// how do you add a const to an object?
let obj = {
	o1 : 1234,
	// const o2 : 4567,   // not like this
}



// const obj.myConst = ''		// not like this either


const myConst = {
	n1 : 1234
};

console.log('function test()');
function test(){
	console.log(myConst);

	myConst.foo = 45678;

	console.log(myConst);
}
