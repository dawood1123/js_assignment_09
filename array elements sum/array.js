var arr = []; 
for (var i = 0; i < 5; i++) {
    arr[i] = +prompt("Enter element number" + i+1); 
}
var sum = 0; 
for (var i = 0; i < 5; i++){ 
    sum = sum + arr[i]; 
}

console.log (sum); 