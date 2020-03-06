var marks = [45, 81, 63, 98, 56, 35, 23];
sum=0;
for(var i=0; i<marks.length;i++){
    var element = marks[i];
    sum=sum + element;
}
console.log("total of the marks: ",sum);

function getArraySum(numbers){
        sum=0;
    for(var i=0; i<marks.length;i++){
        var element = marks[i];
        sum=sum + element;
    }
    return sum;
}
var numbers = [45, 81, 63, 98, 56, 35, 23];
var result = getArraySum(numbers)
console.log("total of the marks: ",result);

var total = getArraySum([45, 81, 63, 98, 56, 35, 23])
console.log("total of the marks: ",total);