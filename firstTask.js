let a = +prompt("Input: ");
if(!isNaN(a) && typeof(a)=="number"){
    if(a%2==0){
        console.log("Четное");
    }
    else console.log("Нечетное");
}
else console.log("Not a number");
