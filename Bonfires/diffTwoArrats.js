function diff(arr1, arr2) {
	var newArray = [];	
  // if(arr1.length > arr2.length){
  // 	var bArr = arr1;
  // 	var sArr = arr2;
  // }
  // else{
  // 	var bArr = arr2;
  // 	var sArr = arr1;
  // }
  // console.log("bigger array: " + bArr);
  // console.log("smaller array: " + sArr);

  for(var i=0; i < arr2.length; i ++){

    if(arr1.indexOf(arr2[i]) === -1){
      newArray.push(arr2[i]);
    }
  }

  for(var j=0; j<arr1.length; j++){
    if(arr2.indexOf(arr1[j]) === -1){
      newArray.push(arr1[j]);
    }
  }


  // for(i=0; i<bArr.length; i++){
  // 	// console.log(bArr.indexOf(sArr[i]));
  // 	if(bArr.indexOf(sArr[i]) === -1 ){
  // 		newArray.push(bArr[i-1]);
  // 		console.log(newArray);
  // 	}
  // }
  // for(j=0; j<sArr.length; j++){
  // 	// console.log(bArr.indexOf(sArr[i]));
  // 	if(bArr.indexOf(sArr[j]) === -1 ){
  // 		newArray.push(sArr[j-1]);
  // 		console.log(newArray);
  // 	}
  // }
  
  // Same, same; but different.
  console.log(newArray);
  return newArray;
}

//diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diff(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']);
//diff(['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']);