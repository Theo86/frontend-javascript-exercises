module.exports.newArray = function(N1,N2,N3,N4){
	var array = [N1,N2,N3,N4]
	return array;
};

module.exports.firstAndLast = function(array){
	var first = 0, last = array.length-1;
	//var localArray = [];
	//localArray.push (Array[0]);
	//localArray.push (Array[last]);
	return Array(array[first],array[last]);
};