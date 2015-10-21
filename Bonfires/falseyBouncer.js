function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function isFalse(value){
  	if(value !== 'true'){
  	  	return value;
  	}
  }
  var a1 = arr.filter(isFalse);
  console.log(a1);
  return a1;
}

bouncer([7, 'ate', '', false, 9]);
