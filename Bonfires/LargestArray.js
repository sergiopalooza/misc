function largestOfFour(arr) {
  // You can do this!
  var maxArray = [];
  var maxNum =0;

  for(i=0; i< arr.length; i++){
  	for(j=0; j < 4; j++ ){
  		if (arr[i][j] > maxNum) {
  			maxNum = arr[i][j];
  			console.log("the biggest number currently is: " + maxNum);
  			//maxArray.push(arr[i][j]);
  		}
  	}
  	maxArray.push(maxNum);
  	maxNum=0;
  }
  console.log(maxArray);
  return maxArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
