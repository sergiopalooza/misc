function mutation(arr) {
	a1 = arr.slice(0,1); //slicing each word into its own array
	a2 = arr.slice(1);
	
	a1[0] = a1[0].toLowerCase(); //forcing lowercase 
	a2[0] = a2[0].toLowerCase();

	a1 = a1[0].split(""); //breaking the single string element into an array
	a2 = a2[0].split(""); //of characters
	console.log(a1);
	console.log(a2);
	//console.log("array 1 is " + a1);
	var len = a2.length;
	//console.log(len);

	for(var i=0; i<len; i++){
		if(a1.indexOf(a2[i]) < 0){
			console.log(false);
			return false;
		}
	}
	console.log(true);
	return true;
}

mutation(['Alien', 'line']);
