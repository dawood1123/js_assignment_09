
var nam = prompt("Enter Name"); 
var str = ""; // Initialize str as an empty string

for (var i = nam.length - 1; i >= 0; i--) { 
    str = str + nam[i]; 
}

console.log(str); // Outputs "demhA"
