function sumAll(arr) {
	var max = Math.max.apply(null, arr);
	var min = Math.min.apply(null, arr);
	console.log("max is: " + max);
	console.log("min is: " + min);

	var a2 =[];
	for(var i = min; i <= max; i++){
		a2.push(i);
		console.log(a2);
	}

	a2 = a2.reduce(function(prev, current, index){
		return prev + current;
	});
	console.log(a2);
	return a2;
}

sumAll([1, 4]);
