const graph = {
	joe: ["alice", "bob", "claire"],
	bob: ["anuj", "peggy", "joe"],
	alice: ["peggy", "joe"],
	claire: ["thom", "jonny", "joe"],
	peggy: [],
	thom: ["tina"],
	jonny: [],
	tina: []
};

const personIsSeller = (name, seller) => name[name.length - 1] === seller;

let searchCache = {};
let linkWay = [];
const breadth_firstSearch = (name, seller) => {
	searchCache[name] = true
	let searchQueue = graph[name] || [];
	for (let i = 0; i < searchQueue.length; i++) {
		if (personIsSeller(searchQueue[i], seller)) {
			linkWay.unshift(name)
			linkWay.push(searchQueue[i])
			return searchQueue[i];
		}
	}
	
	for (let i = 0; i < searchQueue.length; i++) {
		if (!searchCache[searchQueue[i]]) {
			let searchUser = breadth_firstSearch(searchQueue[i], seller);
			if (searchUser != "noBody") {
				linkWay.unshift(name)
				return searchUser
			}
		}
	}
	
	return "noBody"
}

//找到某人X的朋友或者朋友的朋友里以字母 ${seller} 结尾的人
const seller = "a"
console.log(`\n${breadth_firstSearch("alice", seller)} is the seller`, `\n\n${linkWay.join('->')}`)