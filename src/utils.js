function pickRandomJoke(jokes) {}
exports.clampValue = (number, min, max) => {
	return Math.max(min, Math.min(number, max));
};

exports.CONSTANTS = {
	ONE_MINUTE: 60,
	THIRTY_MINUTES: 1800,
	TWO_HOURS: 7200,
	FOUR_HOURS: 14400,
	ONE_DAY: 86400,
};
