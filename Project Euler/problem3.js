var testNum = 455;
var largestFactor = 0;
var largestPrimeFactor = 0;
for(i=2; i < testNum; i++){
	if(testNum % i == 0){
		largestFactor = i;
		console.log('largest factor is now ' + largestFactor);
	}
}
//Need to find a good way of determining if a number is a prime
//var isPrime = 0;
//for(j=2; j < largestFactor; j++){
//	isPrime = largestFactor%j;
//	
//	if(largestFactor % j > 0){ //if it has a remainder
//		console.log(largestFactor + ' is not a prime');
//	} //if it does not have a remainder it is a prime
//}