function truncate(str, num) {
	var len = str.length;
    if(len === num){
      return str;
    }
    else if(len < num){
      return str;
    }
	else if(len > num){
		var newStr = str.slice(0, num -3);
		newStr = newStr.concat('...');
		//newStr = newStr.toString();
		console.log(newStr);
	}
  return newStr;
}	

truncate('A-tisket a-tasket A green and yellow basket', 4);
