function repeat(str, num) {
	if(num < 0){
		return "";
	}
	else{
		var newString="";
		for(var i=0;i<num;i++){
			//console.log(str);
			newString = newString.concat(str);
		}
	}
	console.log(newString);
  return newString;
}

repeat('abc', 3);
