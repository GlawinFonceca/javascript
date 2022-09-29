
const firstName="john";
const num=29;
const rate=5.5;
const bool=true;
const a=undefined;

console.log(typeof(firstName));
console.log(typeof(num));
console.log(typeof(rate));
console.log(typeof(bool));

let test=confirm("click ok to test","");
if(test==false){
   console.log("clicked cancle");
}
else{
   console.log("test is complete");
}

let test2=prompt("enter the name:","");
console.log(`name is ${test2}`);

const a=2;
const b=2;
console.log(a**b);

let n=5;
console.log(n+=5);
console.log(n*=2);
console.log(n/=5);
console.log(n%=5);


let counter=1;
++counter;
alert(counter);

let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?
console.log(c);
console.log(d);

const a=20;
const b=43;

console.log((a>b  ? 'true':'false'));

let age=prompt("enter your age:","");
if( age>=18 && age<=60){
   alert("hello");
}
else{
   alert("invalid");
}

