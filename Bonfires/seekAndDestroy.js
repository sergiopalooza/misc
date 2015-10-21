function destroyer(arr) {
  // Remove all the values
  function destroy(value){
  	console.log(key + 'destroyed');
  	return value != key;


  }

  for(i=1; i<arguments.length; i++){
  	var key = arguments[i];
  	console.log(key);
    arr = arr.filter(destroy);
  }


  console.log(arr);
  return arr;
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);