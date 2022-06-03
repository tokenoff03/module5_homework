let x = prompt("input:");
let check = +x;
if(isNaN(check) && x != "true" && x != "false"){
    console.log("string");
}
else if(typeof(check)=="number" && !isNaN(check)){
    console.log(typeof(a));
}
else if(x == "true" || x == "false"){
    console.log("boolean");
}
else {
    console.log("Тип x не определён");
}
