/**
 *
 * @param {*} str: the original todo content
 * @param {*} limitLength: the max length that should be shown on each todo's row
 * @param {*} postFix: what to add after the truncated string
 */
export const limitCharStr = (str, limitLength, postFix) =>
	str.length > limitLength ? str.substring(0, limitLength) + postFix : str
