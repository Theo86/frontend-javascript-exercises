module.exports.stream = function(conditionalFn,actionFn){
	while (conditionalFn()){
		actionFn();
	};
};

module.exports.sumNumbers = function(A){
	var counter = 0, total = 0;
	while (counter < A.length){
		total = total + A[counter];
		counter++;
	};
	return total;
};

