function where(arr, num) {
	  // Find my place in this sorted array.
	 var arrCopy = arr;
	 arrCopy.push(num); 
	 arrCopy.sort(compareNumbers);
	 console.log('Copy with sorted with compareNumbers:', arrCopy.sort(compareNumbers));
	 var index = 0;
	 index = arrCopy.indexOf(num);
	 console.log(num + ' should be placed at ' + index);
	 //console.log(num);
	return index;
}

where([40, 60], 50);


function compareNumbers(a, b) {
  return a - b;
}

