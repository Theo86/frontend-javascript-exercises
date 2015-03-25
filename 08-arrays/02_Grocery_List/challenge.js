module.exports.addItem = function(item,grocerylist){
	if (grocerylist.indexOf(item) == -1) {
		grocerylist.push(item);
	}
	return grocerylist; 
};

module.exports.reverseSortedList = function(list){
	list.sort();
	list.reverse();
	return list;
};