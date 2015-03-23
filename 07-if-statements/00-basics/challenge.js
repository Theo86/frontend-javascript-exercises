module.exports.favoriteNumber = function(favorite,guess) {
	if (guess > favorite) {
		return "Too high";
	}
	else if (guess < favorite) {
		return "Too low";
	}
	else {
		return "You got it!";
	}
};

module.exports.checkLock = function(N1,N2,N3,N4) {
	if (((N1 == 3) || (N1 == 5) || (N1 == 7))
		&& (N2 == 2) 
		&& ((N3 >= 5) && (N3 <= 100)) 
		&& ((N4 < 9) || (N4 > 20))) {
		return "correct";
	}
	else {
		return "incorrect";
	}
};

module.exports.canIGet = function (item,money){
	if ((item == 'MacBook Air') && (money >= 999)) {
		return true;
	} 
	else if ((item == 'MacBook Pro') && (money >= 1299)) {
		return true;
	} 
	else if ((item == 'Mac Pro') && (money >= 2499)) {
		return true;
	} 
	else if ((item == 'Apple Sticker') && (money >= 1)) {
		return true;
	} 
	else return false;
};