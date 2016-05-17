'use strict';

function fibonacci_series(n) {
	var arr = new Array();
	
	while (n >= 0) {
		arr.unshift(fibonacci(n));
		n--;
	}

	return arr;
}

function fibonacci(n){
	if (n==0) {
		return 0;
	}else if (n == 1) {
		return 1;
	}else {
		return fibonacci(n-1) + fibonacci(n-2);
	}
}

module.exports = fibonacci_series;
