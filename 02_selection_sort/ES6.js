const selection_sort = (list) => {
	for (let i = 0; i < list.length; i++) {
		let minIndex = i, min = list[minIndex], exchange = list[i];
		for (let j = i + 1; j < list.length; j++) {
			if (list[j] < min) {
				minIndex = j;
				min = list[minIndex]
			}
		}
		
		list[i] = min;
		list[minIndex] = exchange
	}
	return list
}

console.log(selection_sort([2, 7, 3, 6, 5, 8, 1, 0, 9, 8]))