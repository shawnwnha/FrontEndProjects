function rewards(){
	var prize = 0.01;
	for(var i = 1;i<31;i++){
		if(i===1){
			prize *= i;
		}
		else{
			prize *= 2;
		}
		console.log(prize)
	}
	
	return prize;
}