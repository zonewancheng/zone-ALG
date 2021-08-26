const binary_search = (list, search) => {
	let start = 0, end = list.length - 1, mid = (start + end) >> 1;
	while (start <= end) {
		if (list[mid] === search) {
			return mid;
		} else if (list[mid] > search) {
			end = mid - 1;
			mid = (start + end) >> 1;
		} else {
			start = mid + 1
			mid = (start + end) >> 1;
		}
	}
	return null
}

console.log(binary_search([1, 3, 5, 7, 9, 11, 12, 13, 19, 29], 9)); //4