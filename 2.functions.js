function addNum1(a,b,c) {
	return a+b+c;
}

function addNum(a,b,c) {
	const d = a + b + c;
	console.log(d);
}

function print(){
	console.log("Hello world");

}

// console.log(addNum1(4,2,3));

print();








function addNum1(a,b) {
	return a+b;
}

const addNum2 = (a,b) => {
	return a + b ;
}




// Arrow function :- ES6 syntax

const addNum3 = (a,b) => a + b;

const doubler = b => 2*b;

console.log(doubler(7));