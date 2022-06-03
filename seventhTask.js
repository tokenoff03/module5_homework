let arr = [1,null,3,"abs",5,6,7];
let countEven = 0;
let countOdd = 0;
arr.forEach(value => {
    if(!isNaN(value) && typeof(value) === "number"){
        if(value%2==0) countEven++;
        else countOdd++;
    }
});
console.log(`Четные: ${ countEven }, Нечетные ${ countOdd }`)
