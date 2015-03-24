module.exports.reversePlusOne = function(Argarray){
	var returnarray = new Array;
	returnarray = Argarray.reverse();
	returnarray.unshift(1);
	return returnarray;
};

module.exports.plusesEverywhere = function(Argarray){
	var tarray = new Array;
	tarray = Argarray.join('+');
	return tarray;
};

module.exports.arrayQuantityPlusOne = function(Argarray){
	return Argarray.length+1;
};