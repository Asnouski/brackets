module.exports = function check(str, bracketsConfig) {
	let strRez = ''
	let bracketRez = ''
	if (str === '') strRez = true
	let arrStr = str.split('')
	for (let i = 0; i < arrStr.length; i++) {
		if (arrStr[i] === "(" && arrStr[i + 1] === ")" || arrStr[i] === "[" && arrStr[i + 1] === "]" || arrStr[i] === "{" && arrStr[i + 1] === "}" || arrStr[i] === arrStr[i + 1]) {
			arrStr.splice(i, 2)
			return check(arrStr.join(''), bracketsConfig)
		}
		else strRez = false
	};
	for (let i = 0; i < bracketsConfig.length; i++) {
		for (let j = 0; j < bracketsConfig[i].length; j++) {
			if (bracketsConfig[i][j] === "(" && bracketsConfig[i][j + 1] === ")" || bracketsConfig[i][j] === "[" && bracketsConfig[i][j + 1] === "]" || bracketsConfig[i][j] === "{" && bracketsConfig[i][j + 1] === "}") {
				bracketsConfig[i].splice(j, 2)
			}
			if (bracketsConfig[i].length === 0) {
				bracketRez = true
			}
			else bracketRez = false
		}
	}
	return Boolean(strRez * bracketRez)
}
