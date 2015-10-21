function convert(num) {
  var roman=[];
  if(num >= 10){
    var tens = Math.floor(num/10);
    console.log(tens);
    num = num - (tens * 10);
    console.log(num);

    for(i=0; i<tens;i++){
      roman.push('X');
    }    
  }
  if(num>=5){
  	if(num !=9){
  		var fives = Math.floor(num/5);
  		num = num - (fives * 5);
  		console.log(num);
  		for(i=0; i<fives; i++){
  			roman.push('V');
  		}
  	}

  	if(num==9){
  		roman.push('I');
  		roman.push('X');
  	}
  }
  if(num < 5){
  		var ones = num;
  		for(i=0; i<ones; i++){
  				roman.push('I');
  			}
   		}
  roman = roman.join('');
  

  console.log(roman);
 return roman;
}

convert(12);
