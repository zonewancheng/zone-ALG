const graph = {
	you: ["alice", "bob", "claire"],
	bob: ["anuj", "peggy", "you"],
	alice: ["peggy", "you"],
	claire: ["thom", "jonny", "you"],
	peggy: [],
	thom: ["tina"],
	jonny: []
};

const personIsSeller = (name, seller) => name[name.length - 1] === seller;

let searchCache = {}
const breadth_firstSearch = (name, seller) => {
	searchCache[name] = true
	let searchQueue = graph[name] || [];
	
	console.log(searchQueue)
	
	for (let i = 0; i < searchQueue.length; i++) {
		if (personIsSeller(searchQueue[i], seller)) {
			return searchQueue[i];
		}
	}
	
	for (let i = 0; i < searchQueue.length; i++) {
		if (!searchCache[searchQueue[i]]) {
			let searchUser = breadth_firstSearch(searchQueue[i], seller);
			if (searchUser != "noBody") {
				return searchUser
			}
		}
	}
	return "noBody"
}

//找到you的朋友或者朋友的朋友里以字母 ${seller} 结尾的人
const seller = "a"
console.log(`${breadth_firstSearch("alice", seller)} is the seller`)