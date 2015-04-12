module.exports.sumNumbers = function(NumberstoAdd) {
	var sum = 0;
	for (var counter = 0; counter < NumberstoAdd.length; counter++)
	{
		sum = sum + NumberstoAdd[counter]
	};
	return sum;
};

module.exports.splitAndLowerCaseString = function(inputString) {
	var output = inputString.split(',');
	for (var i = 0; i < output.length; i++) {
		output[i] = output[i].toLowerCase();
	}
	return output;
};

module.exports.addIndex = function(arrayOfData) { 
	var output = [];
	for (var i = 0; i < arrayOfData.length; i++) {
		output.push(i + " is " + arrayOfData[i]);
	}
	return output;
};;
