var arr = []; 
for (var i = 0; i < 5; i++) {
    arr[i] = +prompt("Enter element number" + i+1); 
}

var max = arr[0]; 

for (var i = 0; i < 5; i++) { 
    if (arr[i] > max){ 
        max = arr[i]; 
    }
}

console.log ("maximun numbe is: " + max )