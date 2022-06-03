let map = new Map([
    [1, "Almaty"],
    ["2", "string"],
    [true, "boolean"]
]); 
for(let arr of map){
    console.log(`Key is ${arr[0]}, value is ${arr[1]}`);
}
