const quicksort = (list) => {
	if (list.length < 2) {
		return list;
	} else {
		let pivot = list[0];
		let lessArr = [], greaterArr = [];
		for (let i = 1; i < list.length; i++) {
			if (list[i] <= pivot) {
				lessArr.push(list[i]);
			} else {
				greaterArr.push(list[i]);
			}
		}
		return [...quicksort(lessArr),pivot,...quicksort(greaterArr)]
	}
}

console.log(quicksort([2,1,4,5,6,0,7,9,3,2,8]))