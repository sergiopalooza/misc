//function titleCase(str) {
//	//a1 = str.split(" ");
//	//console.log(a1);
//	//
//	//console.log(a1[3].charAt(2));
//	console.log(str[2].toUpperCase() + str.slice(1));
//  return str;
//}
//
//titleCase("I'm a little tea pot");

function titleCase(str) {
	str = str.toLowerCase();
   var a1 = str.split("");
  // console.log(a1);
   //a1.charAt(0)
   //console.log(a1[0].charAt(0));
   //var i =7;
   //console.log(a1.charAt(i-1));
   a1[4].charAt(4).toUpperCase();
   console.log(a1[4].charAt(4));
   //console.log(a1);
   // console.log("before: "+ a1);
   // for(i=1; i<a1.length; i++){
   // 	if(a1[i -1].charAt(i-1) == ' '){
   // 		a1[i] = a1[i].charAt(i).toUpperCase();

   // 	}
   // }
   //a1[0] = a1[0].charAt(0).toUpperCase();
   //console.log(a1[0].charAt(0));
   //console.log("after: " + a1);
  return str;
}

titleCase("I'm a little tea pot");
