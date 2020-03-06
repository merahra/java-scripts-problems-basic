var business = 450;
var minister = 650;
var sochib = 550;
if(business>minister){
    if(business>sochib){
        console.log("business is bigger");}
        else{
            console.log("sochib is bigger");
        }
    
    
}
else{
    if(minister>sochib){
    console.log("Minister is bigger");
}
else{
    console.log("Minister is bigger")
}
}
//this is short cut
var max=Math.max(business, sochib, minister);
console.log(max);
