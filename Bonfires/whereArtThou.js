function where(collection, source) {
  var arr = [];
  var len = collection.length;
  var prop = Object.keys(source);  

  //console.log(len);
  //console.log(collection[1]);
  //if(collection[1].hasOwnProperty('last')){
  //	console.log("poperty has a last");
  //	console.log(collection[1].last);
  //}
  //console.log(Object.keys(source));
  //collection[prop] = source[prop];
  //console.log(Object.keys(source));

  for(i=0; i<len; i++){
  	if(collection[i].hasOwnProperty(prop) && collection[i][prop] === source[prop]){ //if they have a matching property WORKING
     // if(collection[i][prop] === source[prop]){ //if the value also matches
  			arr.push(collection[i]);
  		//}
  	}
  }
   //What's in a name?
   console.log(arr);
  return arr;
}

where([{ 'a': 1, 'b': 2 }, { 'a': 1 }, { 'a': 1, 'b': 2, 'c': 2 }], { 'a': 1, 'b': 2 }), [{ 'a': 1, 'b': 2 }, { 'a': 1, 'b': 2, 'c': 2 }];
