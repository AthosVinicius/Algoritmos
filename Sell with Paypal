function calculationSell(value, times){

    if(!times)
      times = 1;

    var rate1 = 4.99 * value/100;
    var installmentFree = 2.39 * value/100;
    var installmentFree_result = 0;

    for(var i = 0; i< (times-1); i++){
       installmentFree_result += installmentFree;
    }

    var result = (rate1+installmentFree_result+0.60);

    console.log("Value Total: "+value);
    console.log("Rate: "+result);
    console.log("To receiver: "+(value -result));
    console.log("To pay: "+times+"x "+(value / times));
    
}
