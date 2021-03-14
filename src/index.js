module.exports = function check(str, bracketsConfig) {
	if (str.length <= 1)
		return false
	let sr, num
	let stack = []
	let open = ['[', '{', '(', '|']
	let close = [']', '}', ')', '|']
	let bracketRez = '';
	for (let i = 0; i < str.length; i++) {
		num = str[i]
		if (close.indexOf(num) > -1) {
			sr = open[close.indexOf(num)]
			if (stack.length == 0 || (stack.pop() != sr)) {
				return false
			}
		} else {
			stack.push(num)
		}
	}
	let st = []
	for (let i = 0; i < bracketsConfig.length; i++) {
		for (let j = 0; j < bracketsConfig[i].length; j++) {
			if (bracketsConfig[i][j] === "(" && bracketsConfig[i][j + 1] === ")" || bracketsConfig[i][j] === "[" && bracketsConfig[i][j + 1] === "]" || bracketsConfig[i][j] === "{" && bracketsConfig[i][j + 1] === "}") {
				bracketsConfig[i].splice(j, 2)
			}
			if (bracketsConfig[i].length === 0) {
				bracketRez = true
			}
			else return false
		}
	}
	let rez = Boolean(stack.length === 0);
	return (stack.length === 0);
}
