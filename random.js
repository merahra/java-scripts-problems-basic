var num = 2.5;
var result = Math.floor(num);
var result2 = Math.ceil(num);
var result3 = Math.round(num);
console.log(result);
console.log(result2);
console.log(result3);

 var dice = Math.random(); //random number generate kkorbe
console.log(dice);
 var dice2 = Math.random() * 10;
 console.log(dice2);
 //round number of a random number
 var output = Math.round(dice2);
console.log(output);

for(var i=0; i<10; i++){
    var dice2 = Math.random() * 6;
    var output = Math.round(dice2); 
    console.log(output);
}