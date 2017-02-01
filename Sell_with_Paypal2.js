function calculationSell2(value, times){

    if(!times)
      times = 1;

	var errado = true;
	var direcao = 1;

  while(errado){

      var rate1 = 4.99 * (value+direcao)/100;
      var installmentFree = 2.39 * (value+direcao)/100;
      var installmentFree_result = 0;

      for(var i = 0; i< (times-1); i++){
         installmentFree_result += installmentFree;
      }

      var result = (rate1+installmentFree_result+0.60);

      if(((value+direcao) -result) > (value) && ((value+direcao) -result) < (value+10)){

        console.log("Value Total: "+(value+direcao));
        console.log("Rate: "+result);
        console.log("To receiver: "+(value));
        console.log("To pay: "+times+"x "+((value+direcao) / times));
        errado = false;

      }else{

        if(((value+direcao) -result) > value)
          direcao += -1;
        else
          direcao +=1;

        //console.log("Resultado False: "+(value+direcao));
		  }

  }


    
}
