function mathOperations(num1, num2, str) {
if (str === `+`){
console.log(num1+num2);
}else if(str===`-`){
    console.log(num1=num2);
}else if(str===`*`){
    console.log(num1/num2);
}else if(str === `/`){
    console.log((num1/num2));
}else if(str===`**`){
    console.log(num1**num2);
}

    console.log();
}
mathOperations(5, 6, '**');