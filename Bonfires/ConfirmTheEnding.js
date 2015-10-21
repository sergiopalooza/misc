function end(str, target) {
	var len = str.length;
	console.log(len);
	var targetLen = target.length; 
	console.log(target);
	//console.log("difference between: " + len + "-" + target);
	var test = str.substring((len-targetLen),len)
	console.log(test);

	if(target === test){
		return true;
	}
	else {
		return false;
	}
	//var diff = Math.abs(str.length - target.length);
	//console.log(diff);
  // "Never give up and good luck will find you."
  // -- Falcor
}

end('Bastian', 'n');