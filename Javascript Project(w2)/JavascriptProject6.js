
function randomChance(coins){
	var random = Math.floor(Math.random()*100)+1;

	for(var i = coins;i>0;i--){
		var randomCoin = Math.floor(Math.random()*51)+50;
		if (i>100){
			if((i%100)===random){
			coins+= randomCoin;
			console.log("this much will be added",randomCoin);
			break;
			}
		}
		else
		{
			if(i==random){
			coins+= randomCoin;
			console.log("this much will be added",randomCoin);
			break;	
			}
		}
		coins--;
	}

	return coins;
}
