//for loop
var n:number = 10 ;
for(var i=0; i <n ; ++i) {
    console.log("number = ", i);
}

var list = ["foo", "bar", "bim", "pako"];
for(var el of list) {
    console.log(el);
}


//while
console.log();
n = 10 ;
while(n > 0 ) {
    console.log("number = ", n);
    n--;
}

//do ... while
console.log();
n = 10 ;
do {
    console.log("number = ", n);
    n--;
} while(n> 0 );