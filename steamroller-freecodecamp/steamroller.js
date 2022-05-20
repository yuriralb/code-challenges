function steamrollArray(arr) {
	let answerArray = []
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i]) && arr[i].length > 1 && arr[i] != []) {
			console.log(arr[i])
			answerArray = answerArray.concat(filteringArray(arr[i]))
		} else if (Array.isArray(arr[i]) && arr[i].length === 1 && arr[i] != []) {
			answerArray.push(filteringItem(arr[i]))
		} else if (Array.isArray(arr[i]) === false){
			answerArray.push(arr[i])
		}
	}
	return answerArray
}

function filteringItem(item) {
	let item1 = item
	let item2 = item1
	while (true) {
		if (Array.isArray(item1) === false) {
			return item1
		} else {
			item1 = item2[0]
		}
		if (Array.isArray(item2) === false) {
			return item2
		} else {
			item2 = item1[0]
		}
	}
}

function filteringArray(array) {
	let newArray = []
	for (let i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			newArray.push(filteringItem(array[i]))
		} else {
			newArray.push(array[i])
		}
	}
	return newArray
}

console.log(steamrollArray([1, [], [3, [[4]]]]));