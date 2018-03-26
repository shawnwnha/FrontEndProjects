function daystilmyBirthday(daysUntilMyBirthday){
	if(daysUntilMyBirthday>30){
		console.log("I don't actually celebrate my birthday.")
	}
	else{
		console.log("I reserved gourmet restaurant and Sky lounge for two!")
	}

	while(daysUntilMyBirthday>=0){
		if(daysUntilMyBirthday==0){
			console.log("YEAHHHHHHHHHHH HAPPY birthday!!!!!!!!!!!!");
			break;
		}
		else if (daysUntilMyBirthday <= 5){
			console.log(daysUntilMyBirthday,"days. IT'S COMMING!!!!!!!");
		}
		else{
			console.log(daysUntilMyBirthday,"days left.");
		}

		daysUntilMyBirthday--;
	}
}