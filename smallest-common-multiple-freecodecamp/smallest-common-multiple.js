function smallestCommons(arr) {
	let rangeArray = []
	let counter = 2
	let answer = 1
	let controlCounter = false
	let controlAnswer = false
	for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
		rangeArray.push(i)
	}
	let mappedArray = [...rangeArray]
	while (findOne(mappedArray) != mappedArray.length) {
		mappedArray = mappedArray.map(num => {
			if (num != 1 && num % counter === 0) {
				let result = num / counter
				controlAnswer = true
				if (result % counter === 0) {
					controlCounter = true
				}
				return result
			} else {
				return num
			}
		})
		console.log(mappedArray)
		if (controlAnswer) {
			answer *= counter
			controlAnswer = false
		}
		if (controlCounter === false) {
			counter += 1
		}
		controlCounter = false
	}
	return answer
}

function findOne(array) {
	let c = 0
	for (let i = 0; i < array.length; i++) {
		if (array[i] === 1) {
			c += 1
		}
	}
	return c
}
console.log(smallestCommons([1, 13]));