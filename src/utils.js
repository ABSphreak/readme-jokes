function pickRandomJoke(jokes) {}
// For giving a median value of cache age. Useful if the cache time is set by the user using query parameters
exports.clampValue = (number, min, max) => {
	return Math.max(min, Math.min(number, max));
};
// Pre defined cache age values (in seconds)
exports.CONSTANTS = {
	ONE_MINUTE: 60,
	THIRTY_MINUTES: 1800,
	TWO_HOURS: 7200,
	FOUR_HOURS: 14400,
	ONE_DAY: 86400,
};
