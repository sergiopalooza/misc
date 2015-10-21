//function chunk2(arr, size) {
//  var numberOfGroups = arr.length/size;
//  var originalLen = arr.length;
//  var a1 = [numberOfGroups];
//  console.log(numberOfGroups);
//  var index = 0;
//
//  for(var i=0; i<numberOfGroups; i++){
//  	for(var j=0; j<size; j++){
//  		a1[[i][j]].push(arr[index]);
//  		index++;
//  	}
//  } 
//  console.log(a1);
//  return a1;
//}

//chunk(['a', 'b', 'c', 'd'], 2);

function chunk(arr, size) {
  var a1 = [];
  var numberOfGroups = arr.length/size;
  var remainder = arr.length%size;
  var index = 0;
  //creating colomns for multi-dimensional array
  for(var x=0; x<numberOfGroups; x++){
  	a1.push([]);
  }

  for(i=0; i<a1.length; i++){
	  for(j=0; j<size; j++){
	  	a1[i].push(arr[index]);
	  	index++;
	  }
	}
  if(remainder > 0){
  	for(var k=0; k<remainder; k++){
  		a1[i-1].pop(); //popping the undefined elemants for an uneven array
  	}
  }	
  console.log(a1);	  
  return a1;
}
chunk([0, 1, 2, 3, 4, 5], 4);
//chunk(['a', 'b', 'c', 'd'], 2);
