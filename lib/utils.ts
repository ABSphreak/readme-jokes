// For giving a median value of cache age. Useful if the cache time is set by the user using query parameters
export const clampValue = (number: number, min: number, max: number): number => Math.max(min, Math.min(number, max));
// Pre defined cache age values (in seconds)
export const CONSTANTS = {
	TEN_SECONDS: 10,
	THIRTY_SECONDS: 30,
	ONE_MINUTE: 60,
	THIRTY_MINUTES: 1800,
	TWO_HOURS: 7200,
	FOUR_HOURS: 14400,
	ONE_DAY: 86400,
} as const;

export const getRandomArrayElement = <T>(arr: T[]): T => {
	const min = 0;
	const max = arr.length;
	return arr[Math.floor(Math.random() * (max - min) + min)]; // The maximum is inclusive and the minimum is inclusive
};
