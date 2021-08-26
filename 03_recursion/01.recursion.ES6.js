const recursion = ()=>{
	console.log(new Date().toISOString())
	setTimeout(()=>{
		recursion()
	},1000)
}

recursion()